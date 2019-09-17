import React from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './../../constants/style.css';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Col span={16} className="mt">
        <Row className="navigation">
          <div>
            <Icon type="rollback" /><a href="/" className="mr ml fw">Back to HomePage</a>
          </div>
        </Row>
        <Row className="mt40">
          <h1> The Page is not found</h1>
        </Row>
      </Col>
    );
  }
}
export default NotFoundPage;


