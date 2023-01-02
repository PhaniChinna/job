import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'
import Header from '../HeaderRoute'
import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="Home-Container">
        <h1 className="Home-Heading">Find The Jobs That Fits To Your Life</h1>
        <p className="Home-Paragraph">
          Millions of people are searching for the jobs salary information
          company reviews Find the jobs that fits your abilities and potential
        </p>
        <Link to="/jobs">
          <button className="Home-Button1" type="button">
            Find Jobs
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
