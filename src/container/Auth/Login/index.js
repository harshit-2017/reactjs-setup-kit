import { login } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

const LoginComponent = React.lazy(() =>
  import("components/Login/LoginComponent")
);

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: { errorField: "", errorMessage: "" },
    };
  }

  handleSubmit = (value) => {
    if (!value.username) {
      this.setState({
        error: {
          errorField: "username",
          errorMessage: "Please fill UserName.",
        },
      });
    } else if (!value.password) {
      this.setState({
        error: {
          errorField: "password",
          errorMessage: "Please fill Password.",
        },
      });
    } else {
      this.setState({
        error: {
          errorField: "",
          errorMessage: "",
        },
      });
      this.props.login(value, this.props);
    }
  };
  render() {
    const { error } = this.state;
    const { loader } = this.props;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent
          loading={loader}
          error={error}
          handleSubmit={(value) => {
            this.handleSubmit(value);
          }}
        />
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {
    loader: state.login.loader,
  };
}

export default connect(mapStateToProps, { login })(Login);
