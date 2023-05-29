import './index.css'

const ThumbnailItem = props => {
  const {eachObj, getBgImage, selectedId} = props
  const {thumbnailUrl, thumbnailAltText} = eachObj

  const showBgImage = () => {
    getBgImage(eachObj)
  }
  return (
    <li className="thumbnail-list-item">
      <button type="button" className="thumbnail-btn" onClick={showBgImage}>
        {selectedId === eachObj.id && (
          <img
            src={thumbnailUrl}
            className="thumbnail-img selected-thumbnail-opacity"
            alt={thumbnailAltText}
          />
        )}
        {selectedId !== eachObj.id && (
          <img
            src={thumbnailUrl}
            className="thumbnail-img unselected-thumbnail-opacity"
            alt={thumbnailAltText}
          />
        )}
      </button>
    </li>
  )
}

export default ThumbnailItem
