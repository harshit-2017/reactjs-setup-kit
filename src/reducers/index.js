import { combineReducers } from "redux";
import login from "./login";
import signUp from "./signUp";
import userPreference from "./userPreference";

export default combineReducers({ login, signUp, userPreference });
