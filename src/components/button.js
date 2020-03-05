import React from 'react';
import PropTypes from 'prop-types';
import { colorVariants } from '../lib/bootstrap';

const Button = ({ variant, outline, children, ...props}) => {

  // extend class and style
  const className = `btn btn${outline ? '-outline' : ''}-${variant} ${props.className || ''}`
  const style = {
    borderRadius: 0,
    borderWidth: 2,
    ...props.style,
  }

  return (
    <button
      {...props}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(colorVariants),
  outline: PropTypes.bool,
  children: PropTypes.node,
}

Button.defaultProps = {
  variant: 'primary',
  outline: false,
}

export default Button;
