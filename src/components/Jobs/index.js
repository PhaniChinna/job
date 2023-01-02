import Header from '../HeaderRoute'
import AllJobsRouteList from '../AllJobsRoute'

import './index.css'

const Jobs = () => (
  <>
    <Header />
    <div className="Jobs-container">
      <AllJobsRouteList />
    </div>
  </>
)

export default Jobs
