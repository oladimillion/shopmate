import * as actions from "..";
import * as types from '../types';


describe('get departments request action test', () => {
  it('should dispatch get departments request action', () => {
    expect(actions.getDepartments({}).type).toEqual(
      types.GET_DEPARTMENTS_REQUEST,
    );
  });
});
