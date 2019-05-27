import * as actions from "..";
import * as types from '../types';


describe('create action test', () => {
  it('should dispatch an action', () => {
    expect(actions.createAction(
      types.GET_CATEGORIES_REQUEST,
      {}
    ).type).toEqual(
      types.GET_CATEGORIES_REQUEST,
    );
  });
});
