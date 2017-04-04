'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row,
         Card,
         CardImg,
         CardBlock,
         CardTitle,
         CardSubtitle,
         CardText } from 'reactstrap'
import isEmpty from 'lodash/isEmpty'
import Header from './../header/Header.jsx'
import userStore from './../../stores/userStore'
import postStore from './../../stores/postStore'
/* eslint-enable no-unused-vars */

const SimilarUsers = React.createClass({
  getInitialState () {
    return {
      users: []
    }
  },

  render () {
    const similarUsers = this.props.users.map(user => {
      const companyName = user.company.name
      const phrase = user.company.catchPhrase ? `(${user.company.catchPhrase})` : ''
      return (
        <Col xs="3" key={user.id}>
          <Card>
            <CardBlock>
              <CardTitle>
                 <Link to={ `/users/${user.id}` }>{ user.name }</Link>
              </CardTitle>
              <CardSubtitle>{companyName} {phrase}</CardSubtitle>
            </CardBlock>
          </Card>
        </Col>
      )
    })

    return (
      <div className="similar-users">
        <Row>
          {similarUsers}
        </Row>
      </div>
    )
  }
})

export default SimilarUsers
