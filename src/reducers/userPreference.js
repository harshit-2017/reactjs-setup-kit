import { ACTION_TYPES } from "../constants";

const INITIAL_STATE = {
  language: "en",
};

const login = function userPreference(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ACTION_TYPES.SET_LANGUAGE:
      return Object.assign({}, state, {
        language: action.payload,
      });

    default:
      return state;
  }
};

export default login;
