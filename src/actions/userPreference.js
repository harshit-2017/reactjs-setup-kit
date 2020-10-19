import { ACTION_TYPES } from "../constants";

export function setLanguage(language) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.SET_LANGUAGE,
      payload: language,
    });
  };
}
