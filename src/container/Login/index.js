import React, { Component } from "react";
import { connect } from "react-redux";
import { login, setLanguage } from "actions/index";
import "App.css";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import strings from "utils/Multilingual";

const { Header, Sider, Content } = Layout;

class Login extends Component {
  onButtonPressed = () => {
    this.props.login();
  };

  onToggleLanguage = () => {
    strings.setLanguage(this.props.language === "it" ? "en" : "it");
    this.setState({});
    this.props.setLanguage(this.props.language === "it" ? "en" : "it");
  };

  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { name } = this.props;
    return (
      <h1
        onClick={() => {
          this.onToggleLanguage();
        }}
      >
        {strings.boiledEgg}
      </h1>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.login.data.title,
    language: state.userPreference.language,
  };
}

export default connect(mapStateToProps, { login, setLanguage })(Login);
