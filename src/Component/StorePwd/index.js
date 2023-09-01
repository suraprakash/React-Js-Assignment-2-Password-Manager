import './index.css'

const StorePwd = props => {
  const {eachData, activeBox, deleteBox} = props
  const {id, web, name, pwd} = eachData
  const firstWord = web.slice(0, 1).toUpperCase()
  const delId = () => {
    deleteBox(id)
  }

  return (
    <li className="list-pwd-card">
      <div className="pwd-container">
        <div className="color-logo-container">
          <p className="first-word">{firstWord}</p>
        </div>
        <div className="pwd-list-container">
          <p className="name-card">{web}</p>
          <p className="name-card">{name}</p>

          {activeBox ? (
            <p className="name-card">{pwd}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="star-img"
            />
          )}
        </div>
      </div>
      <div className="del-container">
        <button type="button" className="img-btn" onClick={delId} data="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="del-img"
          />
        </button>
      </div>
    </li>
  )
}

export default StorePwd
