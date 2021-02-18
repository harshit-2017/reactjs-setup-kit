import { login, setLanguage } from "actions";
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
      console.log(value);
    }
  };
  render() {
    const { error } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginComponent
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
    name: state.login.data.title,
    loader: state.login.loader,
    language: state.userPreference.language,
  };
}

export default connect(mapStateToProps, { login, setLanguage })(Login);
