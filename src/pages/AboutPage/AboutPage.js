import React from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './../../constants/style.css';

class ContactPage extends React.Component {

  render() {
    return (
      <Col span={16} className="mt">
        <Row className="navigation">
          <div>
            <Icon type="home" /><a href="/" className="mr ml fw">Home</a>/<a href="contact" className="mr ml fw">About</a>
          </div>
        </Row>
        <Row className="mt40">
          This is the About Page
            </Row>
      </Col>
    );
  }
}
export default ContactPage;


