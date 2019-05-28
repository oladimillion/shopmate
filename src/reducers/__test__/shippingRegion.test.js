import * as types from "../../actions/types";
import initState from "../initState"
import shippingRegion from "../shippingRegion";

describe('ShippingRegion reducer', () => {
  it('should update the store data', () => {
    expect(
      shippingRegion.ShippingRegion(
        initState.shippingRegion, {
          type: types.GET_SHIPPING_REGION_SUCCESS,
          payload: initState.shippingRegion,
        }).error,
    ).toEqual(null);
  });
  it('should update the store isLoading', () => {
    expect(
      shippingRegion.ShippingRegion(
        initState.shippingRegion, {
          type: types.GET_SHIPPING_REGION_LOADING,
          payload: initState.shippingRegion,
        }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      shippingRegion.ShippingRegion(
        initState.shippingRegion, {
          type: types.GET_SHIPPING_REGION_FAILURE,
          payload: "error occured",
        }).error,
    ).toEqual("error occured");
  });
});

describe('ShippingRegionById reducer', () => {
  it('should update the store data', () => {
    expect(
      shippingRegion.ShippingRegionById(
        initState.shippingRegionById, {
          type: types.GET_SHIPPING_REGION_BY_ID_SUCCESS,
          payload: initState.shippingRegionById,
        }).error,
    ).toEqual(null);
  });
  it('ishould update the store isLoading', () => {
    expect(
      shippingRegion.ShippingRegionById(
        initState.shippingRegionById, {
          type: types.GET_SHIPPING_REGION_BY_ID_LOADING,
          payload: initState.shippingRegionById,
        }).isLoading,
    ).toEqual(true);
  });
  it('should update the store error', () => {
    expect(
      shippingRegion.ShippingRegionById(
        initState.shippingRegionById, {
          type: types.GET_SHIPPING_REGION_BY_ID_FAILURE,
          payload: "error occured",
        }).error,
    ).toEqual("error occured");
  });
});

