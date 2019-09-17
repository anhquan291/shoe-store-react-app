import React from 'react';
import { Row } from 'antd';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import './constants/style.css';
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import SideMenu from './components/SideMenu/SideMenu';
import SideBanner from './components/SideBanner/SideBanner';
import Carausel from './components/Carausel/Carausel';


class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <Carausel></Carausel>
          <Row className="mt40">
            <SideMenu></SideMenu>
            {/* show components from route */}
            {this.showContentMenus(routes)}
            <SideBanner></SideBanner>
          </Row>
        </div>
      </Router>
    );
  }
  /* Show Route */
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;


