import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/LoginRoute'
import Home from './components/HomeRoute'
import Jobs from './components/Jobs'
import ProtectedRoute from './components/ProtectedRoute'
import JobListDetails from './components/jobsListDetails'
import NotFound from './components/NotFoundRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/jobs" component={Jobs} />
      <ProtectedRoute exact path="/jobs/:id" component={JobListDetails} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
