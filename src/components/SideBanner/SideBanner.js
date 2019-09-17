import React from 'react';
import { Col } from 'antd';
import sidebanner from './../../img/side-banner.jpg';

class SideBanner extends React.Component {

  render() {
    return (
      <Col span={4}>
        <img src={sidebanner} className="sidebanner" alt=""></img>
      </Col>
    );
  }
}

export default SideBanner;