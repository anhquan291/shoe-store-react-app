import React, { Component } from 'react';
import { Menu } from 'antd';

class RightMenu extends Component {
  render() {
    return (
        <Menu mode="horizontal">
            <Menu.Item key="mail">
                <a href="signin">Signin</a>
            </Menu.Item>
            <Menu.Item key="app">
                <a href="signup">Signup</a>
            </Menu.Item>
        </Menu>
    );
  }
}

export default RightMenu;

