import './index.css'

const HistoryBoard = props => {
  const {userdetails, onDeleteUser} = props
  const {domainUrl, id, timeAccessed, logoUrl, title} = userdetails
  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="historylistcontainer">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="scoialmediaicon" />

      <p className="socialmediaheading">{title}</p>
      <p className="sociallinkparagraph">{domainUrl}</p>
      <button
        type="button"
        className="button"
        data-testid="delete"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="deleteicon"
        />
      </button>
    </li>
  )
}

export default HistoryBoard
