import { userVerification } from "actions";
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
    console.log(props);
    this.state = {
      visible: false,
      error: { errorField: "", errorMessage: "" },
    };
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     nextProps.userVerificationData,
  //     this.props.userVerificationData,
  //     "userVerificationDatauserVerificationData"
  //   );
  //   if (nextProps.userVerificationData != this.props.userVerificationData) {
  //     if (nextProps.userVerificationData) {
  //       if (!this.state.visible) {
  //         this.setState({ visible: true }, () => {
  //           this.showModal();
  //         });
  //       }
  //     }
  //   }

  //   return true;
  // }

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
      this.props.userVerification(value, this.props);
    }
  };

  okPress = () => {
    alert("ok");
  };

  cancelPress = () => {
    alert("cancel");
  };

  showModal = () => {};

  render() {
    console.log("render component");
    const { error } = this.state;
    const { loader } = this.props;

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <UserVerificationComponent
          handleSubmit={(value) => {
            this.handleSubmit(value);
          }}
          loading={loader}
          error={error}
          autherror={this.props.error}
        />
      </Suspense>
    );
  }
}

function mapStateToProps(state, ownProps) {
  if (state.userVerification.userVerificationData) {
    Modal.confirm({
      title: "Confirm Add Sibling",
      icon: <ExclamationCircleOutlined />,
      content: "Do you want to add sibling?",
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        ownProps.history.push("/signup");
      },
      onCancel: () => {
        ownProps.history.push("/login");
      },
    });
  }
  return {
    loader: state.userVerification.loader,
    userVerificationData: state.userVerification.userVerificationData,
  };
}

export default connect(mapStateToProps, { userVerification })(UserVerification);
