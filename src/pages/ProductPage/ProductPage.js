import React from 'react';
import { Row, Col, Icon } from 'antd';
import 'antd/dist/antd.css';
import './../../constants/style.css';
import ProductList from './../../components/ProductList/ProductList';

class ProductPage extends React.Component {
  render() {
    return (
      <Col span={16} className="mt">
        <Row className="navigation">
          <div>
            <Icon type="home" /><a href="/" className="mr ml fw">Home</a>/<a href="/products" className="mr ml fw">Product</a>
          </div>
        </Row>
        <Row className="mt40">
          <ProductList></ProductList>
        </Row>
      </Col>
    );
  }
}
export default ProductPage;


