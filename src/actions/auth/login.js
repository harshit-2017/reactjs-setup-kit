import commonApi from "utils/commonApi";
import { ACTION_TYPES } from "../../constants";

export function login(loginDetails, props) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.LOGIN_REQUEST,
    });

    try {
      // const response = await commonApi({ path: "/todos/1" });
      let data = {
        status: true,
        userData: { name: "harshit", username: "harshit", profile: "" },
      };
      setTimeout(() => {
        if (data.status) {
          dispatch({
            type: ACTION_TYPES.LOGIN_COMPLETE,
            payload: data.userData,
          });
          props.history.push("/home");
        } else {
          dispatch({
            type: ACTION_TYPES.LOGIN_FAIL,
            payload: { error: "Some error occured" },
          });
        }
      }, 2000);
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.LOGIN_FAIL,
        payload: { error: "Some error occured" },
      });
    }
  };
}
