import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import "./home.css";
class Home extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1 style={{ color: "black" }}>Welcome {name}</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    name: state.login.data.name,
  };
}

export default connect(mapStateToProps, {})(Home);
