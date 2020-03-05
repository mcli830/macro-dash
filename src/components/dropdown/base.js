import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import ScBase from './base.css';
import ScContent from './content.css';

const Dropdown = ({ button, buttonProps, children, attach, offset, open, onBlur }) => {

  const contentRef = React.useRef();

  React.useEffect(() => {
    if (open) {
      contentRef.current.focus();
    }
  }, [open])

  return (
    <ScBase>
      <Button {...buttonProps}>{button}</Button>
      <ScContent
        ref={contentRef}
        className="bg-white"
        attach={attach}
        offset={offset}
        open={open}
        onBlur={onBlur}
        tabIndex="1"
      >
        {children}
      </ScContent>
    </ScBase>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  button: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  buttonProps: PropTypes.object,
  attach: PropTypes.oneOf(['left', 'center', 'right']),
  offset: PropTypes.string,
  open: PropTypes.bool,
  onBlur: PropTypes.func,
}

Dropdown.defaultProps = {
  button: 'Dropdown',
  buttonProps: {
    variant: 'primary',
    outline: true,
  },
  attach: 'center',
  open: false,
}

export default Dropdown;
