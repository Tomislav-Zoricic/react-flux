'use strict'

/* eslint-disable no-unused-vars */
import React from 'react'
import { Collapse,
         Navbar,
         NavbarToggler,
         NavbarBrand,
         Nav,
         NavItem,
         NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
/* eslint-enable no-unused-vars */

const Header = React.createClass({
  render () {
    return (
      <div>
        <Navbar light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/users">Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/posts">Posts</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
})

export default Header
