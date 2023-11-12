import {
  SOME_ACTION
} from '@context/Shop.constants'

const ShopReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case SOME_ACTION:
      // handle the action and return a new state
      return { ...state, someProperty: action.payload };
    // handle other cases...
    default:
      return state;
  }
}

export default ShopReducer
