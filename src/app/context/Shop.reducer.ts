import {
  FETCH_FAILURE,
  FETCH_SUCCESS
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
    default:
      return state;
  }
}

export default ShopReducer
