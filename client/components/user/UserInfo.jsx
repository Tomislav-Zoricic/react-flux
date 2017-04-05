'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Card,
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

class UserInfo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  render () {
    const user = this.props.user
    // NOTE Set here some random avatar image so that user change is more obvious.
    // NOTE Check whether these attributes exist and then display them,
    // otherwise you'll have bunch of empty line items.
    return (
      <Card>
        <CardImg src="./../../client/dist/images/default_avatar.png" />
        <CardBlock>
          <CardTitle>{user.username}</CardTitle>
          <CardSubtitle>{user.name}</CardSubtitle>
          <CardBlock>
            <CardText>Contact</CardText>
            <ul>
              <li>{user.phone}</li>
              <li>{user.email}</li>
              <li>{user.website}</li>
            </ul>
          </CardBlock>
          <CardBlock>
            <CardText>Address</CardText>
            <ul>
              <li>{user.address.street}</li>
              <li>{user.address.suite}</li>
              <li>{user.address.city}</li>
              <li>{user.address.zipcode}</li>
            </ul>
          </CardBlock>
          <CardBlock>
            <CardText>Company</CardText>
            <ul>
              <li>{user.company.name}</li>
              <li>{user.company.catchPhrase}</li>
              <li>{user.company.bs}</li>
            </ul>
          </CardBlock>
        </CardBlock>
      </Card>
    )
  }
}

UserInfo.propTypes = {
  user: React.PropTypes.object.isRequired
}

export default UserInfo
