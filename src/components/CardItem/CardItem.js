import React from 'react';
import { Col, Card } from 'antd';

class CardItem extends React.Component {

  render() {
    let { product } = this.props;
    return (
      <Col span={6}>
        <Card title={product.name} bordered={true} hoverable
          cover={<img alt="example" src={product.image} />}>
          {product.price}$
            </Card>
      </Col>
    );
  }
}

export default CardItem;


