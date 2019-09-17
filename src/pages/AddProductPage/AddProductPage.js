import React from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './../../constants/style.css';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import history from '../../constants/History';

class AddProductPage extends React.Component {
  render() {
    return (
      <Col span={16} className="mt">
        <Row className="navigation">
          <div>
            <Icon type="home" /><a href="/" className="mr ml fw">Home</a>/
                <a href="/products" className="mr ml fw">Product</a>/
                <a href="/add-product" className="mr ml fw">Add Product</a>
          </div>
        </Row>
        <Row className="mt40">
          <AddProductForm history={history} match={this.props.match} />
        </Row>
      </Col>
    );
  }
}
export default AddProductPage;


