'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Container,
         ListGroup,
         ListGroupItem,
         Row,
         Col,
         Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'
import Header from './../header/Header.jsx'
import UserInfo from './UserInfo.jsx'
import SimilarUsers from './SimilarUsers.jsx'
import userStore from './../../stores/userStore'
import postStore from './../../stores/postStore'
/* eslint-enable no-unused-vars */

class User extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {},
      posts: [],
      similarUsers: []
    }
  }

  componentWillMount () {
    // NOTE compose this somehow into one call getUserContent?
    userStore.addChangeListener(this._getUser)
    userStore.addChangeListener(this._getSimilarUsers)
    postStore.addChangeListener(this._getPosts)
  }

  componentDidMount () {
    const notLoaded = isEmpty(this.state.user)
    if (notLoaded) this._getUserContent()
  }

  componentWillReceiveProps (nextProps) {
    const currentUser = this.props.match.params.id
    const nextUser = nextProps.match.params.id

    if (currentUser !== nextUser) this._getUserContent(nextUser)
  }

  componentWillUnmount () {
    userStore.removeChangeListener(this._getUser)
    userStore.removeChangeListener(this._getSimilarUsers)
    postStore.removeChangeListener(this._getPosts)
  }

  _getUser (userId) {
    userId = userId || this.props.match.params.id
    const user = userStore.getUserById(userId)
    this.setState({ user })
  }

  _getSimilarUsers (userId) {
    userId = userId || this.props.match.params.id
    const similarUsers = userStore.getSimilarUsers(userId)
    this.setState({ similarUsers })
  }

  _getPosts (userId) {
    userId = userId || this.props.match.params.id
    const posts = postStore.getUserPosts(userId)
    this.setState({ posts })
  }

  _getUserContent (id) {
    this._getUser(id)
    this._getPosts(id)
    this._getSimilarUsers(id)
  }

  _renderUserInfo () {
    const notLoaded = isEmpty(this.state.user)
    if (notLoaded) return false
    return <UserInfo user={this.state.user}/>
  }

  _loadMorePosts () {
    console.log('stari moj')
  }

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
              <Button onClick={this._loadMorePosts}>More posts...</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default User
