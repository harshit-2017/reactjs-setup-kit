import React, { PureComponent, Suspense } from "react";
import strings from "utils/Multilingual";
import ErrorBoundary from "../utils/errorBoundary";
import { store } from "../store";
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
          <Suspense fallback={<div>Loading...</div>}>
            <WrappedComponent {...this.props} />
          </Suspense>
        </ErrorBoundary>
      );
    }
  };
};

export default AppContainerWithErrorBoundary;
