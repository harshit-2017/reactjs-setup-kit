import { combineReducers } from "redux";
import login from "./login";
import signUp from "./signUp";
import otp from "./otp";
import userVerification from "./userVerification";
import userPreference from "./userPreference";

export default combineReducers({
  login,
  userVerification,
  signUp,
  otp,
  userPreference,
});
