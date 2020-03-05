import React from 'react';
import PropTypes from 'prop-types';
import { colorVariants } from '../lib/bootstrap';

const Button = ({ variant, outline, onClick, children, title }) => {
  return (
    <button
      className={`btn btn${outline ? '-outline' : ''}-${variant}`}
      onClick={onClick}
      style={{ borderRadius: 0, borderWidth: 2 }}
      title={title}
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
  title: PropTypes.string,
}

Button.defaultProps = {
  variant: 'primary',
  outline: false,
}

export default Button;
