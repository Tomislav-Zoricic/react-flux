/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container,
        Jumbotron,
        Card,
        CardImg,
        CardBlock,
        CardTitle,
        CardSubtitle,
        CardText,
        Button } from 'reactstrap'

import postStore from './../../stores/postStore'
import userStore from './../../stores/userStore'
import postActions from './../../actions/postActions'
import Header from './../header/Header.jsx'
/* eslint-enable no-unused-vars */

const Posts = React.createClass({
  getInitialState () {
    return {
      posts: []
    }
  },
  componentWillMount () {
    postStore.addChangeListener(this._onChange)
  },

  _onChange () {
    const posts = postStore.getPosts()
    this.setState({ posts })
  },

  componentDidMount () {
    postActions.getPosts()
  },

  componentWillUnmount () {
    postStore.removeChangeListener(this._onChange)
  },

  _renderPost (post) {
    const user = userStore.getUserById(post.userId)
    if (!user) return

    const email = user.email ? `(${user.email})` : ''
    return <Card key={post.id}>
            <CardBlock>
              <CardTitle>{post.title}</CardTitle>
              <CardSubtitle>
                <p><Link to={`/users/${user.id}`}>{user.name}</Link> {email}</p>
              </CardSubtitle>
              <CardText>{post.body}</CardText>
            </CardBlock>
          </Card>
  },

  render () {
    // NOTE Shuffle posts before displaying them.
    const posts = this.state.posts.map(post => this._renderPost(post))
    return <div>
            <Header/>
              <Container>
              <Jumbotron>
                <h1 className="display-3">Hello, Posts!</h1>
                <p className="lead">Check here for you daily need of inspirational posts </p>
              </Jumbotron>
              {posts}
            </Container>
          </div>
  }
})

export default Posts
