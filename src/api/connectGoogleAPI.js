import React from 'react';

function connectGoogleAPI(Component, options = {}) {


  return class extends React.Component {

    constructor(props) {
      super(props);
      // sign-in state
      this.state = {
        loading: true,
        error: false,
        auth: null,
        isSignedIn: false,
      };
      // bind handlers for async operations
      this.initClient = this.initClient.bind(this);
      this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
      // inject google api script and load client
      const script = document.createElement('script');
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        window.gapi.load('client:auth2', this.initClient);
      };
      // append script to page to initialize
      document.body.appendChild(script);
    }

    initClient() {
      window.gapi.client.init(options).then(() => {
        // get auth instance
        const auth = window.gapi.auth2.getAuthInstance();
        // Listen for sign-in state changes.
        auth.isSignedIn.listen(this.handleUpdate);
        // handle the initial sign-in state.
        this.setState({
          loading: false,
          auth,
          isSignedIn: auth.isSignedIn.get(),
        });
      }, function(error) {
        // handle gapi auth errors
        this.setState({ error });
      });
    }

    handleUpdate(isSignedIn) {
      this.setState({ isSignedIn });
    }

    render() {
      return (
        <Component {...this.props} {...this.state} />
      );
    }
  }
}

export default connectGoogleAPI;
