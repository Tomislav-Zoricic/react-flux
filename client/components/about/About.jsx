'use strict'
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
         CardText
        } from 'reactstrap'
import Header from './../header/Header.jsx'
/* eslint-enable no-unused-vars */

const About = React.createClass({
  render () {
    return (
      <Container>
        <Header/>
        <Card>
          <CardImg src="./../../client/dist/images/batman.png"/>
          <CardBlock>
            <CardTitle>
              Sometime in the near future you will be able to see about page here
            </CardTitle>
            <CardSubtitle>We're waiting too...</CardSubtitle>
            <CardText>
              <Link to="/">Get me out of here</Link>
            </CardText>
          </CardBlock>
        </Card>
      </Container>
    )
  }
})

export default About
