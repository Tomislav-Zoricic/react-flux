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

const UserInfo = React.createClass({
  propTypes: {
    user: React.PropTypes.object
  },

  getInitialState () {
    return {
      user: {},
      posts: []
    }
  },

  render () {
    const user = this.props.user
    // NOTE Set here some random avatar image so that user change is more obvious.
    return (
      <Card>
        <CardImg src="./../../client/dist/images/default_avatar.png" />
        <CardBlock>
          <CardTitle>{user.username} ({user.name})</CardTitle>
          <CardSubtitle>{user.email}</CardSubtitle>
          <CardText>

          </CardText>
        </CardBlock>
      </Card>
    )
  }
})

export default UserInfo
