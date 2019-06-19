import * as actions from "..";
import * as types from '../types';


describe('create order request action test', () => {
  it('should dispatch create order request action', () => {
    expect(actions.createOrder({}).type).toEqual(
      types.CREATE_ORDER_REQUEST,
    );
  });
});

describe('get order items request action test', () => {
  it('should dispatch get order items request action', () => {
    expect(actions.getOrderItems({}).type).toEqual(
      types.GET_ORDER_ITEMS_REQUEST,
    );
  });
});
