import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderCategoriesList = () => {
    const {categoryOptions, changeCategory, activeCategoryId} = props
    return categoryOptions.map(each => {
      const onClickCategoryItem = () => changeCategory(each.categoryId)
      const isActive = activeCategoryId === each.categoryId

      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={each.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{each.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList()}</ul>
    </>
  )

  const renderRatingsFiltersList = () => {
    const {ratingsList, changeRating, activeRatingId} = props
    return ratingsList.map(rating => {
      const onClickRatingItem = () => changeRating(rating.ratingId)
      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }
  const onChangeSearchInput = e => {
    const {onChangeText} = props
    onChangeText(e.target.value)
  }

  const getSearchInput = () => {
    const {searchText} = props

    return (
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-txt"
          value={searchText}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const getClearFilter = () => {
    const {clearFilters} = props
    clearFilters()
  }

  return (
    <div className="filters-group-container">
      {getSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      {/* Replace this element with your code */}

      <button className="clear-btn" type="button" onClick={getClearFilter}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
