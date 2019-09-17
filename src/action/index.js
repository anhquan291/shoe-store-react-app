import * as Types from './../constants/ActionType';
import callApi from './../api/apiCaller';


// Send a request to get data from server and dispatch Fetch action
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callApi('shoeproducts', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data));
    });
  };
}
export const actFetchProducts = (products) => {
  return {
    type: Types.FETCH_PRODUCTS,
    // payload:products
    products
  }
}

// Send a request to get ID from server and dispatch Delete action
export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callApi(`shoeproducts/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(id));
    });
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  }
}

//add product to data from server
export const actAddProductRequest = (product) => {
  return dispatch => {
    return callApi('shoeproducts', 'POST', product).then(res => {
      dispatch(actAddProduct(res.data));
    });
  }
}
//add the new product to store
export const actAddProduct = (product) => {
  return {
    type: Types.ADD_PRODUCT,
    product
  }
}

//Get a product info from server 
export const actGetProductRequest = (id) => {
  return dispatch => {
    return callApi(`shoeproducts/${id}`, 'GET', null).then(res => {
      dispatch(actGetProduct(res.data));
    });
  }
}

//Get Product from Store to display in the Inputs
export const actGetProduct = (product) => {
  return {
    type: Types.EDIT_PRODUCT,
    product
  }
}

//Update data from Sever
export const actUpdateProductRequest = (product) => {
  return dispatch => {
    return callApi(`shoeproducts/${product.id}`, 'PUT', product).then(res => {
      dispatch(actUpdateProduct(res.data));
    });
  }
}
//Update data from Store
export const actUpdateProduct = (product) => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  }
}