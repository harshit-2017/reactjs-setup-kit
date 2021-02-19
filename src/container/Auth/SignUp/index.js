import { login, setLanguage } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";

const SignUpComponent = React.lazy(() =>
  import("components/SignUp/SignUpComponent")
);

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: { errorField: "", errorMessage: "" },
    };
  }

  handleSubmit = (value) => {
    if (!value.name) {
      this.setState({
        error: {
          errorField: "name",
          errorMessage: "Please fill Name.",
        },
      });
    } else if (!value.username) {
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
        <SignUpComponent
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
  return {};
}

export default connect(mapStateToProps, {})(SignUp);
