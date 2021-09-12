import { actionType } from "../actions/type";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      state = action.payload;
      return { ...state };
    case actionType.DEL_USER:
      const cloneUser = [{ ...state }];
      cloneUser.splice(0, cloneUser.length);
      state = cloneUser;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
