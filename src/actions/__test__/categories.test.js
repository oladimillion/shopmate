import * as actions from "..";
import * as types from '../types';


describe('get categories request action test', () => {
  it('should dispatch get categories request action', () => {
    expect(actions.getCategories({}).type).toEqual(
      types.GET_CATEGORIES_REQUEST,
    );
  });
});
