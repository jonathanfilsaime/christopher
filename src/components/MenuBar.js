import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

export default class MenuBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {this.setState({ activeItem: name });
}

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/">Home</NavLink>
        </Menu.Item>

        <Menu.Item
          name='games'
          active={activeItem === 'games'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/games">Games</NavLink>
        </Menu.Item>

        <Menu.Item
          name='sketches'
          active={activeItem === 'sketches'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/sketches">Sketches</NavLink>
        </Menu.Item>

        <Menu.Item
          name='projects'
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        >
          <NavLink to="/projects">Projects</NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}