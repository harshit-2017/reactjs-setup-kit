import { ACTION_TYPES } from "../constants";

const INITIAL_STATE = {
  loader: false,
  error: "",
};

const otp = function otp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.OTP_REQUEST:
      return Object.assign({}, state, {
        loader: true,
      });
    case ACTION_TYPES.OTP_COMPLETE:
      return Object.assign({}, state, {
        loader: false,
      });
    case ACTION_TYPES.OTP_FAIL:
      return Object.assign({}, state, {
        loader: false,
        error: action.payload,
      });
    default:
      return state;
  }
};

export default otp;
