'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container,
         Row,
         Col,
         Button,
         Jumbotron,
         Card,
         CardImg,
         CardBlock,
         CardTitle,
         CardSubtitle,
         CardText } from 'reactstrap'
import Header from './../header/Header.jsx'
import Users from './../users/Users.jsx'
/* eslint-enable no-unused-vars */

const Home = React.createClass({
  render () {
    return (
      <div className="home">
        <Header />
        <Container>
          <Jumbotron>
            <h1 className="display-3">
              React and Flux
            </h1>
            <p className="lead">Testing THE UI library, along with its vanilla architectural pattern</p>
            <hr className="my-2" />
            <p>You may see some reactstrap, and whole other bunch of third party libraries</p>
            <p>
              API is delivered by JSONPlaceholder, check'em out at <a target="_blank" href="https://jsonplaceholder.typicode.com/">https://jsonplaceholder.typicode.com/</a>
            </p>
          </Jumbotron>

          <Row>
            <Col xs="6">
              <Card>
                <CardImg src="./../../client/dist/images/users.png"/>
                <CardBlock>
                  <CardTitle>
                    <Link to="/users">Users</Link>
                  </CardTitle>
                  <CardSubtitle>Discover your community</CardSubtitle>
                  <CardText>Find other talented post writers around your global village</CardText>
                </CardBlock>
              </Card>
            </Col>
            <Col xs="6">
              <Card>
                <CardImg src="./../../client/dist/images/posts.png"/>
                <CardBlock>
                  <CardTitle>
                    <Link to="/posts">Posts</Link>
                  </CardTitle>
                  <CardSubtitle>Check out the latest/hottest posts our poets have to offer</CardSubtitle>
                  <CardText>Inspire yourself by reading the works of others.</CardText>
                </CardBlock>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
})

export default Home
