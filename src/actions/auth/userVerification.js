import { ACTION_TYPES } from "../../constants";
export function userVerification(data, props) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.USER_VERIFICATION_REQUEST,
    });

    try {
      // const response = await commonApi({ path: "/todos/1" });
      let response = {
        status: true,
        message: "user verified.",
      };
      setTimeout(() => {
        if (response.status) {
          dispatch({
            type: ACTION_TYPES.USER_VERIFICATION_COMPLETE,
            payload: true,
          });
        } else {
          dispatch({
            type: ACTION_TYPES.USER_VERIFICATION_FAIL,
            payload: "Some error occured",
          });
          props.history.push("/otpverification");
        }
      }, 2000);
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.USER_VERIFICATION_FAIL,
        payload: "Some error occured",
      });
    }
  };
}
