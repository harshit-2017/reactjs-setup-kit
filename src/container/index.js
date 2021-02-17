import { lazy } from "react";

const Login = lazy(() => import("./Auth/Login"));
const SignUp = lazy(() => import("./Auth/SignUp"));
const UserVerification = lazy(() => import("./Auth/UserVerification"));
const OtpVerification = lazy(() => import("./Auth/OtpVerification"));

export { Login, SignUp, UserVerification, OtpVerification };
