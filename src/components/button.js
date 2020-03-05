import React from 'react';
import PropTypes from 'prop-types';
import { colorVariants } from '../lib/bootstrap';

const Button = ({ variant, outline, onClick, children }) => {
  return (
    <button
      className={`btn btn${outline ? '-outline' : ''}-${variant}`}
      onClick={onClick}
      style={{ borderRadius: 0 }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(colorVariants),
  outline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
}

Button.defaultProps = {
  variant: 'primary',
  outline: false,
}

export default Button;
