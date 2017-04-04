'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import Header from './../header/Header.jsx'
import {
  Container,
  Jumbotron,
  Col,
  Card,
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap'

import userActions from './../../actions/userActions.js'
import userStore from './../../stores/userStore'
import postStore from './../../stores/postStore'
/* eslint-disable no-unused-vars */

const QUOTE_LENGTH = 50

const Users = React.createClass({
  getInitialState () {
    return {
      users: []
    }
  },

  componentWillMount () {
    userStore.addChangeListener(this._onChange)
  },

  _onChange () {
    this.setState({ users: userStore.getUsers() })
  },

  componentDidMount () {
    userActions.getUsers()
  },

  componentWillUnmount () {
    userStore.removeChangeListener(this._onChange)
  },

  _renderUser (user) {
    if (!user) return
    // NOTE Load here some kind of random post
    // const randomPost = postStore.getRandomUserPost(user.id)
    // const text = ifrandomPost.body.substring(0, QUOTE_LENGTH)
    const email = user.email ? `(${user.email})` : ''
    return <Card key={user.id}>
            <CardBlock>
              <CardTitle>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </CardTitle>
              <CardSubtitle>
                <p>{email}</p>
              </CardSubtitle>
            </CardBlock>
          </Card>
  },

  render () {
    const users = this.state.users.map(user => {
      return this._renderUser(user)
    })

    return (
      <div>
        <Header />
        <Container>
          <Jumbotron>
            <h1 className="display-3">Our post writing finest crew!</h1>
            <p className="lead">Check here for you daily need of inspirational posts </p>
          </Jumbotron>
          {users}
        </Container>
      </div>
    )
  }
})

export default Users
