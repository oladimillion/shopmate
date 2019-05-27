import * as actions from "..";
import * as types from '../types';


describe('cart request action test', () => {
  it('should dispatch add cart request action', () => {
    expect(actions.addCart({}).type).toEqual(
      types.ADD_CART_REQUEST,
    );
  });
  it('should dispatch get cart request action', () => {
    expect(actions.getCart({}).type).toEqual(
      types.GET_CART_REQUEST,
    );
  });
  it('should dispatch get cart amount request action', () => {
    expect(actions.getCartAmount({}).type).toEqual(
      types.GET_CART_AMOUNT_REQUEST,
    );
  });
  it('should dispatch update cart request action', () => {
    expect(actions.updateCart({}).type).toEqual(
      types.UPDATE_CART_REQUEST,
    );
  });
  it('should dispatch delete cart item request action', () => {
    expect(actions.deleteCartItem({}).type).toEqual(
      types.DELETE_CART_ITEM_REQUEST,
    );
  });
});
