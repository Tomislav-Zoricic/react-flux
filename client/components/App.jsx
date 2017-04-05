'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom'
import { Button } from 'reactstrap'
import Header from './header/Header.jsx'
import Home from './home/Home.jsx'
import User from './user/User.jsx'
import Users from './users/Users.jsx'
import Posts from './posts/Posts.jsx'
import About from './about/About.jsx'
import NotFound from './notFound/NotFound.jsx'

import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch
} from 'react-router-dom'
/* eslint-enable no-unused-vars */

class App extends React.Component {
  render () {
    return (
      <HashRouter>
         <Switch>
           <Route exact path="/" component={ Home } />
             <Route path="/posts" component={ Posts } />
             <Route path="/users/:id" component={ User } />
             <Route path="/users" component={ Users } />
             <Route path="/about" component={ About } />
           <Route component={ NotFound } />
         </Switch>
      </HashRouter>
    )
  }
}

export default App
