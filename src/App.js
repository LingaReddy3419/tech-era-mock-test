import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'

import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/courses/:id" component={CourseDetails} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    )
  }
}

export default App
