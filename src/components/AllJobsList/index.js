import {Link} from 'react-router-dom'
import {GoLocation} from 'react-icons/go'
import {BsBriefcaseFill} from 'react-icons/bs'

import './index.css'

const JobsList = props => {
  const {JobsListData} = props
  const {
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    id,
    packagePerAnnum,
    rating,
    title,
  } = JobsListData
  return (
    <Link to={`/jobs/${id}`}>
      <li className="List-container">
        <div className="List-div-container">
          <div className="TIttle-Rating">
            <img className="Company-Logo" src={companyLogoUrl} alt={title} />
            <div className="Title-rating">
              <p className="Tittle">{title}</p>
              <div className="Img-rating">
                <img
                  src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1671165033/single_v8jb3j.png"
                  className="Star-Logo"
                  alt="star"
                />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="Location-container">
            <div className="PerAnna-Container">
              <GoLocation className="GoLocation" />
              <p className="Location">{location}</p>
              <BsBriefcaseFill className="BsBreiFill" />
              <p className="Employment">{employmentType}</p>
            </div>
          </div>
          <div className="Annum-container">
            <p className="PackagePerAnnum">{packagePerAnnum}</p>
          </div>
          <hr className="Line" />
          <div className="JobDesc">
            <h1 className="Desc">Description</h1>
            <p className="JobDescription">{jobDescription}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default JobsList
