import { ACTION_TYPES } from "../constants";

const INITIAL_STATE = {
  loader: false,
  error: "",
  userVerificationData: false,
};

const userVerification = function userVerification(
  state = INITIAL_STATE,
  action
) {
  switch (action.type) {
    case ACTION_TYPES.USER_VERIFICATION_REQUEST:
      return Object.assign({}, state, {
        loader: true,
        userVerificationData: false,
      });
    case ACTION_TYPES.USER_VERIFICATION_COMPLETE:
      return Object.assign({}, state, {
        loader: false,
        userVerificationData: action.payload,
      });
    case ACTION_TYPES.USER_VERIFICATION_FAIL:
      return Object.assign({}, state, {
        loader: false,
        error: action.payload,
        userVerificationData: false,
      });
    default:
      return state;
  }
};

export default userVerification;
