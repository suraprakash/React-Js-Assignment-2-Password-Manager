import {Component} from 'react'

import './index.css'

import {v4 as uuidv4} from 'uuid'

import StorePwd from '../StorePwd'

class PwdManager extends Component {
  state = {
    searchInput: '',
    enterWeb: '',
    userName: '',
    userPwd: '',
    storeData: [],
  }

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onWeb = event => {
    this.setState({
      enterWeb: event.target.value,
    })
  }

  onUser = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onPwd = event => {
    this.setState({
      userPwd: event.target.value,
    })
  }

  onSelectBox = () => {
    this.setState(oldData => ({
      showPwd: !oldData.showPwd,
    }))
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {enterWeb, userName, userPwd} = this.state
    const newData = {
      id: uuidv4(),
      web: enterWeb,
      name: userName,
      pwd: userPwd,
      showPwd: false,
    }
    this.setState(oldValue => ({
      storeData: [...oldValue.storeData, newData],
      enterWeb: '',
      userName: '',
      userPwd: '',
    }))
  }

  onDelete = userId => {
    const {storeData} = this.state
    this.setState({
      storeData: storeData.filter(eachId => eachId.id !== userId),
    })
  }

  render() {
    const {
      enterWeb,
      userName,
      userPwd,
      storeData,
      searchInput,
      showPwd,
    } = this.state

    const searchWebsite = storeData.filter(eachData =>
      eachData.web.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo-img"
          />
          <div className="add-container">
            <div className="form-container-page">
              <form className="form-card" onSubmit={this.onFormSubmit}>
                <h1 className="head-card">Add New Password</h1>

                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                    alt="website"
                    className="logo-list-card"
                  />
                  <input
                    type="text"
                    className="input-card"
                    placeholder="Enter Website"
                    onChange={this.onWeb}
                    value={enterWeb}
                  />
                </div>

                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    className="logo-list-card"
                  />

                  <input
                    type="text"
                    className="input-card"
                    placeholder="Enter Username"
                    onChange={this.onUser}
                    value={userName}
                  />
                </div>

                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                    alt="password"
                    className="logo-list-card"
                  />
                  <input
                    type="password"
                    className="input-card"
                    placeholder="Enter Password"
                    onChange={this.onPwd}
                    value={userPwd}
                  />
                </div>

                <div className="btn-container">
                  <button type="submit" className="add-btn">
                    Add
                  </button>
                </div>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png "
              alt="password manager"
              className="add-pass-img"
            />
          </div>

          <div className="show-container">
            <div className="show-card">
              <h1 className="pwd-head">
                Your Passwords
                <p className="counting">{searchWebsite.length}</p>
              </h1>
              <div className="search-pwd-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-img"
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                  value={searchInput}
                  onChange={this.onSearch}
                />
              </div>
            </div>

            <hr className="horizontal-line" />

            <div className="pwd-box-container">
              <label className="label-card">
                <input
                  type="checkbox"
                  className="box-card"
                  value={showPwd}
                  onChange={this.onSelectBox}
                />
                Show passwords
              </label>
            </div>

            {searchWebsite.length === 0 ? (
              <div className="no-pwd-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                  alt="no passwords"
                  className="no-pwd-img"
                />
                <p className="no-pwd-text">No Passwords</p>
              </div>
            ) : (
              ''
            )}
            <ul className="list-all-card">
              {searchWebsite.map(eachData => (
                <StorePwd
                  key={eachData.id}
                  eachData={eachData}
                  activeBox={showPwd}
                  deleteBox={this.onDelete}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default PwdManager
