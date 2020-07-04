import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name });
}

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <NavLink to="/">
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          >
            Home
          </Menu.Item>
        </NavLink>

        <NavLink to="/games">
          <Menu.Item
            name='games'
            active={activeItem === 'games'}
            onClick={this.handleItemClick}
          >
            Games
          </Menu.Item>
        </NavLink>

        <NavLink to="/sketches">
          <Menu.Item
            name='sketches'
            active={activeItem === 'sketches'}
            onClick={this.handleItemClick}
          >
            Sketches
          </Menu.Item>
        </NavLink>

        <NavLink to="/projects">
          <Menu.Item
            name='projects'
            active={activeItem === 'projects'}
            onClick={this.handleItemClick}
          >
            Projects
          </Menu.Item>
        </NavLink>
      </Menu>
    )
  }
}