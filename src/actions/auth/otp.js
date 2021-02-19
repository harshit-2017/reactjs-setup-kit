import commonApi from "utils/commonApi";
import { ACTION_TYPES } from "../../constants";
export function otp(data, props) {
  return async (dispatch) => {
    dispatch({
      type: ACTION_TYPES.OTP_REQUEST,
    });

    try {
      // const response = await commonApi({ path: "/todos/1" });
      let response = {
        status: true,
        message: "Otp verified.",
      };
      setTimeout(() => {
        if (response.status) {
          dispatch({
            type: ACTION_TYPES.OTP_COMPLETE,
          });
          props.history.push("/login");
        } else {
          dispatch({
            type: ACTION_TYPES.OTP_FAIL,
            payload: "Some error occured",
          });
        }
      }, 2000);
    } catch (error) {
      dispatch({
        type: ACTION_TYPES.OTP_FAIL,
        payload: "Some error occured",
      });
    }
  };
}
