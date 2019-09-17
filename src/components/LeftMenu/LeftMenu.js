import React, { Component } from 'react';
import { Menu } from 'antd';
import {Link} from 'react-router-dom';


class LeftMenu extends Component {
  render() {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="products">
                <Link to="/products">Product</Link>
            </Menu.Item>
            <Menu.Item key="contact">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
            <Menu.Item key="about">
              <Link to="/about">About</Link>
            </Menu.Item>
        </Menu>
    );
  }
}

export default LeftMenu;
