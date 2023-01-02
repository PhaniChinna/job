import {Link, withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BsBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="Header-container">
      <div className="Header-Route-container">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png "
            className="Website-Logo1"
            alt="Website logo"
          />
        </Link>
        <ul className="UnOrdered-list">
          <li>
            <Link className="UnOrdered-Home" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="UnOrdered-jobs" to="/jobs">
              Jobs
            </Link>
          </li>
        </ul>
        <button className="LogOut-Button" type="button" onClick={onClickLogout}>
          Logout
        </button>
        <nav className="Nav-mobile-Container">
          <ul className="UnOrdered-mobile">
            <li>
              <Link to="/">
                <AiFillHome className="AiHome" />
              </Link>
            </li>
            <li>
              <Link to="/jobs">
                <BsBriefcaseFill className="HiMall" />
              </Link>
            </li>
          </ul>
          <FiLogOut className="FiLogOut" onClick={onClickLogout} />
        </nav>
      </div>
    </nav>
  )
}
export default withRouter(Header)
