import {Component} from 'react'
import Cookies from 'js-cookie'

import JobsList from '../AllJobsList'

import './index.css'

class AllJobsRouteList extends Component {
  state = {
    allJobs: [],
  }

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/jobs'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const UpdatedData = data.jobs.map(eachJobs => ({
        id: eachJobs.id,
        companyLogoUrl: eachJobs.company_logo_url,
        employmentType: eachJobs.employment_type,
        jobDescription: eachJobs.job_description,
        location: eachJobs.location,
        packagePerAnnum: eachJobs.package_per_annum,
        rating: eachJobs.rating,
        title: eachJobs.title,
      }))
      this.setState({allJobs: UpdatedData})
    }
  }

  render() {
    const {allJobs} = this.state
    return (
      <div>
        <ul className="UnList-Ordered">
          {allJobs.map(eachJobs => (
            <JobsList key={eachJobs.id} JobsListData={eachJobs} />
          ))}
        </ul>
      </div>
    )
  }
}

export default AllJobsRouteList
