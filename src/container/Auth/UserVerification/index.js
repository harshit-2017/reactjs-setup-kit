import { login, setLanguage } from "actions";
import "App.css";
import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Modal, Space } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const UserVerificationComponent = React.lazy(() =>
  import("components/UserVerification/UserVerificationComponent")
);

class UserVerification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      error: { errorField: "", errorMessage: "" },
    };
  }
  handleSubmit = (value) => {
    console.log(value, "valuevaluevaluevalue");
    console.log(value, "valuevaluevaluevalue");
    let EMAIL_RE = /^(\d{10}|\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3}))$/;
    if (!value.username) {
      this.setState({
        error: {
          errorField: "username",
          errorMessage: "Please fill UserName.",
        },
      });
    } else if (!EMAIL_RE.test(value.username)) {
      this.setState({
        error: {
          errorField: "username",
          errorMessage: "Please fill valid UserName.",
        },
      });
    } else {
      this.setState({
        error: {
          errorField: "",
          errorMessage: "",
        },
      });
      Modal.confirm({
        title: "Confirm Add Sibling",
        icon: <ExclamationCircleOutlined />,
        content: "Do you want to add sibling?",
        okText: "Yes",
        cancelText: "No",
        onOk: () => {
          this.okPress();
        },
        onCancel: () => {
          this.showModal();
        },
      });
    }
  };

  showModal = () => {
    this.setState((state, props) => {
      return { visible: !state.visible };
    });
  };

  okPress = () => {
    this.showModal();
    alert("ok");
  };

  render() {
    console.log("render component");
    const { error } = this.state;
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <UserVerificationComponent
          handleSubmit={(value) => {
            this.handleSubmit(value);
          }}
          error={error}
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

export default connect(mapStateToProps, { login, setLanguage })(
  UserVerification
);
