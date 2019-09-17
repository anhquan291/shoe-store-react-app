import React, { Component } from 'react';
import { Row, Col, Icon, Button, Input } from 'antd';
import ProductTable from '../ProductTable/ProductTable';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../action/index';

const { Search } = Input;

class ProductList extends Component {
  // run action 
  componentWillMount() {
    this.props.fetchAllProducts();
  }
  // Delete an item 
  onDelete = (id) => {
    this.props.onDeleteProduct(id);
  }

  render() {
    let { products } = this.props;
    return (
      <React.Fragment>
        <Row>
          <Col span={18} className="mt">
            <div>
              <Search
                placeholder="input search text"
                onSearch={value => console.log(value)}
                style={{ width: 400 }}
              />
            </div>
          </Col>
          <Col span={6} className="mt">
            <Button type="primary">
              <Link to="add-product"  >
                <Icon type="file-add" className="mr" />
                Add New Product
                 </Link>
            </Button>
          </Col>
        </Row>
        <Row>
          <ProductTable
            products={products}
            onDelete={this.onDelete}
          />
        </Row>
      </React.Fragment>
    );
  }
}

// {/* Save Products to Store*/ }
const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: (id) => {
      dispatch(actDeleteProductRequest(id));
    }
  }
}
// {/* Get Products from Store*/ }
const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);