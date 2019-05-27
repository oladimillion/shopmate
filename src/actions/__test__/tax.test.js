import * as actions from "..";
import * as types from '../types';


describe('tax request action test', () => {
  it('should dispatch get tax request action', () => {
    expect(actions.getTax({}).type).toEqual(
      types.GET_TAX_REQUEST,
    );
  });
});
