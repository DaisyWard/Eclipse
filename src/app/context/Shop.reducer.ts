import {
  FETCH_FAILURE,
  FETCH_SUCCESS,
  SAVE_PRODUCT_DATA
} from '@context/Shop.constants'

const ShopReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case FETCH_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.error
      }
    case FETCH_SUCCESS:
      return {
        ...state,
        allProductData: action.payload
      }
    case SAVE_PRODUCT_DATA:
      return {
        ...state,
        productData: action.payload
      }
    default:
      return state;
  }
}

export default ShopReducer
