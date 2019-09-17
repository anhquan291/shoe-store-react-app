import React, { Component } from 'react';
import { Table, Divider, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import { Link } from 'react-router-dom';

class ProductTable extends Component {
  onDelete = (id) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Are you sure you want to Delete the Item ?')) {
      this.props.onDelete(id);
    }
  }
  render() {
    let { products } = this.props;
    // Create Table in AntD
    const columns = [
      {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: status => (
          <Checkbox
            checked={status}
          >
          </Checkbox>
        ),
      },
      {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: image => (
          <img href="" src={image} style={{ width: 100 }} alt="" />
        ),
      },
      {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="name">{text}</a>,
      },

      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: price => (
          <span>${price}</span> //or (`$${price}`),
        ),
      },
      {
        title: 'Desciption',
        key: 'desciption',
        dataIndex: 'desciption',
      },
      {
        title: 'Action',
        key: 'action',
        render: (action) => (
          <span>
            <Button type="primary" ><Link to={`/product/${action.id}/edit`}>Edit</Link></Button>
            <Divider type="vertical" />
            <Button type="danger" onClick={() => this.onDelete(action.id)}>Delete</Button>
          </span>
        ),
      },
    ];
    return (
      <div>
        <Table className='mt' columns={columns} dataSource={products} />
      </div>
    );
  }
}

export default ProductTable;