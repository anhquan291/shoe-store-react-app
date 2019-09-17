import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { connect } from 'react-redux';
import CardItem from './../../components/CardItem/CardItem';
import { actFetchProductsRequest } from './../../action/index';


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  
  componentDidMount() {
    this.props.fetchAllProducts();
  }

  render() {
    let { products } = this.props;
    return (
      <React.Fragment>
        <Col span={16}>
          <div className="title"> <h1> Latest Product Trends</h1> </div>
          <div style={{ background: '#ECECEC', padding: '5px', marginRight: '50px' }}>
            <Row gutter={16}>
              {this.showCartItem(products)}
            </Row>
          </div>
        </Col>
      </React.Fragment>
    );
  }

  //Show Product Items
  showCartItem = (products) => {
    let result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <CardItem
            key={index}
            product={product}
            index={index}
          />
        )
      });
    }
    return result;
  }
}

// {/* Save Products to Store*/ }
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    }
  }
}
// {/* Get Products from Store*/ }
const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


