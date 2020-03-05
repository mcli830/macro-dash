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
          <Button
            variant="success"
            outline
            onClick={() => console.log('link g sheet')}
          >
            <Icon icon="table" />
            <span className="ml-2">Link G-Sheet</span>
          </Button>

          <span className={`mx-3 badge badge-${isSignedIn ? 'success' : 'secondary'}`}>
            <Icon icon={isSignedIn ? 'link' : 'unlink'} />
          </span>

          <Button
            variant={isSignedIn ? 'dark' : 'primary'}
            onClick={isSignedIn ? auth.signOut : auth.signIn}
            title={isSignedIn ? 'Sign Out' : 'Connect Google account'}
          >
            <Icon icon={isSignedIn ? 'sign-out-alt' : ['fab', 'google']} />
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
