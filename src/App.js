import React from 'react';
import connectGoogleAPI from './api/connectGoogleAPI';
import Spinner from './components/spinner';

/*
    App will receive the gapi prop with the following keys:
    {
      isSignedIn: bool
      loading: bool
      error: Error Object || null
      auth: gapi.auth2 instance
      client: gapi.client
    }
*/

function App(props) {

  const { isSignedIn, loading, error, auth } = props;

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">
          Macro Dash
        </div>
        {loading ? <Spinner /> : (
          <div>
            <button
              className={`btn btn-${isSignedIn ? 'outline-' : ''}primary`}
              onClick={isSignedIn ? auth.signOut : auth.signIn}
            >
              {isSignedIn ? 'Sign Out' : 'Login'}
            </button>
            <span> Status: </span>
            <span className={`badge badge-${isSignedIn ? 'success' : 'light'}`}>
              {isSignedIn ? 'ONLINE' : 'OFFLINE'}
            </span>
          </div>
        )}
      </nav>
      <main>
        <div className="jumbotron">
          <h2 className="display-4">Main</h2>
          <p>This is the main content</p>
          <hr className="my-4" />
          <p>App props:</p>
          <pre className="alert alert-dark">
            {JSON.stringify({
              loading: props.loading,
              error: props.error,
              isSignedIn: props.isSignedIn,
            }, null, 2)}
          </pre>
        </div>
      </main>
    </div>
  );
}

export default connectGoogleAPI(App, {
  // Client ID and API key from the Developer Console
  clientId: '179010975502-i48o5vmu4332jhkhmfl6r3vigvpl66q3.apps.googleusercontent.com',
  apiKey: 'AIzaSyD2nis5uDntncz-hkQ6Smlww-sbp42YpJM',
  // Array of API discovery doc URLs for APIs used by the quickstart
  discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  scope: "https://www.googleapis.com/auth/spreadsheets.readonly",
});
