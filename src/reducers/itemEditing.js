import * as Types from './../constants/ActionType';

let initialState = {}; //not an array

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case Types.EDIT_PRODUCT:
      return action.product;
    default: return state;
  }
}
export default itemEditing;