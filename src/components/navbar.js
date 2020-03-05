import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';
import Spinner from './spinner';

const Navbar = ({ loading, isSignedIn, auth }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Macro Dash
      </div>
      {loading ? <Spinner /> : (
        <div className="d-inline-flex align-items-center">
          <div className="mx-3">
            <span>Google: </span>
            <span className={`badge badge-${isSignedIn ? 'success' : 'light'}`}>
              {isSignedIn ? 'LINKED' : 'UNLINKED'}
            </span>
          </div>
          <Button
            variant="primary"
            onClick={isSignedIn ? auth.signOut : auth.signIn}
          >
            {isSignedIn ? 'Sign Out' : 'Login'}
          </Button>
        </div>
      )}
    </nav>
  );
}

Navbar.propTypes = {
  isSignedIn: PropTypes.bool,
  loading: PropTypes.bool,
  error: PropTypes.object,
  auth: PropTypes.object,
  client: PropTypes.object,
}

export default Navbar;
