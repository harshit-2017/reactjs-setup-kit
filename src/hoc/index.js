import { Spin } from "antd";
import React, { PureComponent, Suspense } from "react";
import strings from "utils/Multilingual";
import { store } from "store";
import ErrorBoundary from "utils/errorBoundary";
import "../App.css";

const AppContainerWithErrorBoundary = (WrappedComponent) => {
  return class ReduxWrapper extends PureComponent {
    state = { userPreference: store.getState().userPreference };
    componentDidMount() {
      strings.setLanguage(this.state.userPreference.language);
      this.setState({});
    }
    render() {
      return (
        <ErrorBoundary>
          <Suspense
            fallback={
              <div className="Center">
                <Spin size="large" />
              </div>
            }
          >
            <WrappedComponent {...this.props} />
          </Suspense>
        </ErrorBoundary>
      );
    }
  };
};

export default AppContainerWithErrorBoundary;
