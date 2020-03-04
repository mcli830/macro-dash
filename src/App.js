import React from 'react';
import connectGoogleAPI from './api/connectGoogleAPI';
import Navbar from './components/navbar';
import Spinner from './components/spinner';
// dev
import Log from './dev/log';

/*
    App will receive the gapi props:
    {
      isSignedIn: bool
      loading: bool
      error: Error Object || null
      auth: gapi.auth2 instance
      client: gapi.client
    }
*/

function App(props) {

  const { isSignedIn, loading, error, auth, client } = props;

  const [state, setState] = React.useState({
    fetching: false,
    response: null,
  })

  const receiveResponse = (response) => {
    setState({
      ...state,
      fetching: false,
      response,
    });
  }

  const getSample = () => {
    // handle incomplete load
    if (!client) return null;
    // get sample spreadsheet data
    setState({ ...state, fetching: true });
    client.sheets.spreadsheets.values.get({
      spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
      range: 'Class Data!A2:E',
    }).then(function(response) {
      receiveResponse(response);
    }, function(response) {
      receiveResponse(response);
    });
  }

  return (
    <div className="App">
      <Navbar {...props} getSample={getSample} />
      <main>
        <div className="jumbotron">
          <h2 className="display-4">Dashboard</h2>
            <button
              className="btn btn-outline-success"
              onClick={getSample}
            >
              {state.fetching ? <Spinner /> : 'Get Sample Data'}
            </button>
          <hr className="my-4" />
          <Log name="App props" data={{
            loading: props.loading,
            isSignedIn: props.isSignedIn,
            error: props.error,
          }} />
          <Log name="Fetch response" data={state.response} />
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
