import * as actions from "..";
import * as types from '../types';


describe('create order request action test', () => {
  it('should dispatch create order request action', () => {
    expect(actions.createOrder({}).type).toEqual(
      types.CREATE_ORDER_REQUEST,
    );
  });
});
