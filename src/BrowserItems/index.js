import './index.css'

const BrowserItems = props => {
  const {browserItemsDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = browserItemsDetails

  const deleteItem = () => {}

  return (
    <li className="list-container">
      <p className="time-heading">{timeAccessed}</p>
      <div className="logo-container">
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p className="time-heading">{title}</p>
        <p>{domainUrl}</p>
      </div>
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={deleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserItems
