import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './../../constants/style.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { actAddProductRequest, actGetProductRequest, actUpdateProductRequest } from './../../action/index';
import { connect } from 'react-redux';


const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const formTailLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8, offset: 4 },
};
class AddProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      txtDes: '',
      txtImage: '',
      chkbStatus: ''
    }
  }

  onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  onSave = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let { id, txtName, txtPrice, txtDes, txtImage, chkbStatus } = this.state;
    let product = {
      id: id,
      name: txtName,
      price: txtPrice,
      desciption: txtDes,
      image: txtImage,
      status: chkbStatus
    }
    if (id) {//if ID is exsit then Updating case
      this.props.onUpdateProduct(product);
    } else { //Add new product case
      this.props.onAddProduct(product);
    }
    history.goBack();
  }
  check = () => {
    this.props.form.validateFields(err => {
      if (!err) {
        console.info('success');
      }
    });
  };

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }
  //Receive a Prop then the Life cycle run
  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.itemEditing) {
      let { itemEditing } = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        txtImage: itemEditing.image,
        txtDes: itemEditing.desciption,
        chkbStatus: itemEditing.status
      });
    }
  }

  render() {
    let { txtName, txtPrice, txtDes, txtImage, chkbStatus } = this.state;
    // const { getFieldDecorator } = this.props.form;
    return (
      <form onSubmit={this.onSave}>
        <Form.Item {...formItemLayout} label="Product Name">
          <Input placeholder="Please input product name"
            name="txtName"
            value={txtName}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Price">
          <Input placeholder="Please input product's price"
            name="txtPrice"
            value={txtPrice}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Image">
          <Input placeholder="Please input product image URL"
            name="txtImage"
            value={txtImage}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item {...formItemLayout} label="Description">
          <Input placeholder="Description"
            name="txtDes"
            value={txtDes}
            onChange={this.onChange}
          />
        </Form.Item>
        <Form.Item {...formTailLayout} >
          <Checkbox
            type="checkbox"
            name="chkbStatus"
            value={chkbStatus}
            onChange={this.onChange}
            checked={chkbStatus}
          >
            Availabe
          </Checkbox>
        </Form.Item>
        <Form.Item {...formTailLayout}>
          <Button type="submit" onClick={this.onSave}>
            Save
          </Button>
        </Form.Item>
      </form>
    );
  }
}

const WrappedLogin = Form.create()(AddProductForm)

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProduct: (product) => {
      dispatch(actAddProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(actGetProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(actUpdateProductRequest(product));
    }
  }
}

const mapStateToProps = state => {
  return {
    itemEditing: state.itemEditing
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedLogin);
