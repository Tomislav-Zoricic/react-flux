'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Container,
         ListGroup,
         ListGroupItem,
         Row,
         Col} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Header from './../header/Header.jsx'
import UserInfo from './UserInfo.jsx'
import SimilarUsers from './SimilarUsers.jsx'
import userStore from './../../stores/userStore'
import postStore from './../../stores/postStore'
/* eslint-enable no-unused-vars */

const User = React.createClass({
  getInitialState () {
    return {
      user: {},
      posts: [],
      similarUsers: []
    }
  },

  componentWillMount () {
    // NOTE compose this somehow into one call getUserContent?
    userStore.addChangeListener(this._getUser)
    userStore.addChangeListener(this._getSimilarUsers)
    postStore.addChangeListener(this._getPosts)
  },

  componentDidMount () {
    const notLoaded = isEmpty(this.state.user)
    if (notLoaded) this._getUserContent()
  },

  componentWillReceiveProps (nextProps) {
    const currentUser = this.props.match.params
    const nextUser = nextProps.match.params

    if (currentUser !== nextUser) this._getUserContent()
  },

  componentWillUnmount () {
    userStore.removeChangeListener(this._getUser)
    userStore.removeChangeListener(this._getSimilarUsers)
    postStore.removeChangeListener(this._getPosts)
  },

  _getUser () {
    const userId = this.props.match.params.id
    const user = userStore.getUserById(userId)
    this.setState({ user })
  },

  _getSimilarUsers () {
    const userId = this.props.match.params.id
    const similarUsers = userStore.getSimilarUsers(userId)
    this.setState({ similarUsers })
  },

  _getPosts () {
    const userId = this.props.match.params.id
    const posts = postStore.getUserPosts(userId)
    this.setState({ posts })
  },

  _getUserContent () {
    this._getUser()
    this._getPosts()
    this._getSimilarUsers()
  },

  _renderUserInfo () {
    const notLoaded = isEmpty(this.state.user)
    if (notLoaded) return false
    return <UserInfo user={this.state.user}/>
  },

  render () {
    const posts = this.state.posts.map(post => {
      return <ListGroupItem key={post.id}>
               <h2>{post.title}</h2>
               <p>{post.body}</p>
             </ListGroupItem>
    })

    return (
      <div>
        <Header />
        <Container>
          <SimilarUsers users={this.state.similarUsers}/>
          <Row>
            <Col xs="6">
              {this._renderUserInfo()}
            </Col>
            <Col xs="6">
              <ListGroup>
                {posts}
              </ListGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
})

export default User
