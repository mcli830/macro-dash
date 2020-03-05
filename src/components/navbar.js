import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Button from './button';
import Dropdown from './dropdown/base';
import Spinner from './spinner';

const Navbar = ({ loading, isSignedIn, auth }) => {

  const [state, setState] = React.useState({
    dropdownIsOpen: false,
  });

  const toggleDropdown = () => setState({ ...state, dropdownIsOpen: !state.dropdownIsOpen });
  const closeDropdown = () => setState({ ...state, dropdownIsOpen: false });

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        Macro Dash
      </div>
      {loading ? <Spinner /> : (
        <div className="d-inline-flex align-items-center">
          <Dropdown
            button={<><Icon icon="table" /><span className="ml-2">Link Sheet</span></>}
            buttonProps={{
              variant: 'success',
              outline: true,
              onClick: toggleDropdown,
            }}
            open={state.dropdownIsOpen}
            attach="right"
            onBlur={closeDropdown}
          >
            <ul className="list-group">
              <li className="list-group-item">Item 1</li>
              <li className="list-group-item">Item 2</li>
              <li className="list-group-item">Item 3</li>
              <li className="list-group-item">Item 4</li>
            </ul>
          </Dropdown>


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
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  auth: PropTypes.object,
  client: PropTypes.object,
}

export default Navbar;
