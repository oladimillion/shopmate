import * as actions from "..";
import * as types from '../types';


describe('shipping region request action test', () => {
  it('should dispatch get shipping region request action', () => {
    expect(actions.getShippingRegion({}).type).toEqual(
      types.GET_SHIPPING_REGION_REQUEST,
    );
  });
  it('should dispatch get shipping region by id request action', () => {
    expect(actions.getShippingRegionById({}).type).toEqual(
      types.GET_SHIPPING_REGION_BY_ID_REQUEST,
    );
  });
});
