import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
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
            <span className={`badge badge-${isSignedIn ? 'success' : 'secondary'}`}>
              {isSignedIn ? 'GOOGLE LINKED' : 'GOOGLE UNLINKED'}
            </span>
          </div>
          <Button
            variant={isSignedIn ? 'dark' : 'primary'}
            outline={!isSignedIn}
            onClick={isSignedIn ? auth.signOut : auth.signIn}
            title={(isSignedIn ? 'Unl' : 'L') + 'ink Google Account'}
          >
            <Icon icon={isSignedIn ? 'unlink' : ['fab', 'google']} />
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
