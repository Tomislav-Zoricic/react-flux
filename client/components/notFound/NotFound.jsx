'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap'

/* eslint-enable no-unused-vars */

const NotFound = React.createClass({
  render () {
    return (
      <Jumbotron>
        <h1 className="display-3">404</h1>
        <p className="lead">Page not found!</p>
        <hr className="my-2" />
        <p><Link to="/">Getting you home</Link></p>
      </Jumbotron>
    )
  }
})

export default NotFound
