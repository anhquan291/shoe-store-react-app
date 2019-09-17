import React, { Component } from 'react';
import LeftMenu from '../LeftMenu/LeftMenu';
import RightMenu from '../RightMenu/RightMenu';
import { Drawer, Button } from 'antd';
import './style.css';

class Navbar extends Component {
	state = {
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};
	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
			<nav className="menuBar">
				<div className="logo1">
					<a href="/">Shoe Store</a>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					<div className="rightMenu">
						<RightMenu />
					</div>
					<Button className="barsMenu" type="primary" onClick={this.showDrawer}>
						<span className="barsBtn"></span>
					</Button>
					<Drawer
						title="Menu"
						placement="right"
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<LeftMenu />
						<RightMenu />
					</Drawer>
				</div>
			</nav>
		);
	}
}
export default Navbar;
