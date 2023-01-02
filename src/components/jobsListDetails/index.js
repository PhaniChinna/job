import {Component} from 'react'
import Cookies from 'js-cookie'
import {GoLocation} from 'react-icons/go'
import {BsBriefcaseFill} from 'react-icons/bs'

import SkillsCard from '../SkillsJobs'
import Header from '../HeaderRoute'

import './index.css'

class JobListDetails extends Component {
  state = {
    jobDetailsList: {},
  }

  componentDidMount() {
    this.getJobDetails()
  }

  getDetailsListData = data => ({
    id: data.id,
    companyLogoUrl: data.company_logo_url,
    employmentType: data.employment_type,
    jobDescription: data.job_description,
    location: data.location,
    packagePerAnnum: data.package_per_annum,
    rating: data.rating,
    lifeAtCompany: {
      description: data.life_at_company.description,
      imageUrl: data.life_at_company.image_url,
    },
    title: data.title,
    skills: data.skills.map(eachSkill => ({
      imageUrl: eachSkill.image_url,
      name: eachSkill.name,
    })),
  })

  getJobDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedDataList = this.getDetailsListData(data.job_details)
      this.setState({jobDetailsList: updatedDataList})
    }
  }

  render() {
    const {jobDetailsList} = this.state
    const {
      companyLogoUrl,
      employmentType,
      jobDescription,
      location,
      packagePerAnnum,
      rating,
      lifeAtCompany,
      skills,
      title,
    } = jobDetailsList
    const {description, imageUrl} = lifeAtCompany

    return (
      <>
        <Header />
        <div className="JobsList-container">
          <div className="List-jobs-container">
            <div className="List-of-row">
              <img
                src={companyLogoUrl}
                alt={title}
                className="Company-logo-logo"
              />
              <div className="List-of-column">
                <p className="JobList-title">{title}</p>
                <div className="JobRating-container">
                  <img
                    src="https://res.cloudinary.com/dkwof0tuj/image/upload/v1671165033/single_v8jb3j.png"
                    alt="star"
                    className="Alt-star"
                  />
                  <p className="rating">{rating}</p>
                </div>
              </div>
            </div>
            <div className="Location-Container">
              <GoLocation className="GoLocation" />
              <p className="list">{location}</p>
              <BsBriefcaseFill className="BsBriefFaCase" />
              <p className="Employs">{employmentType}</p>
            </div>
            <div className="PackagePerAnnum">
              <p className="list">{packagePerAnnum}</p>
            </div>
            <hr className="Line-line" />
            <p className="jobDesc">{jobDescription}</p>
            <h1>Skills</h1>
            <ul>
              {skills.map(eachSkill => (
                <SkillsCard key={eachSkill.id} skillDetails={eachSkill} />
              ))}
            </ul>
            <h1>lifeAtCompany</h1>
            <img src={imageUrl} alt="life-at" />
            <p>{description}</p>
          </div>
        </div>
      </>
    )
  }
}

export default JobListDetails
