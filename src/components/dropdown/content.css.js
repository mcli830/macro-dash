import styled from 'styled-components';

export default styled.div`
  position: absolute;
  top: ${props => props.offset ? `calc(100% + ${props.offset})` : '100%'};
  left: ${props => props.attach === 'left' ? 0 : props.attach === 'center' ? '50%' : 'auto'};
  right: ${props => props.attach === 'right' ? 0 : 'auto'};
  transform: ${props => props.attach === 'center' ? 'translate(-50%, 0)' : 'none'};
  display: ${props => props.open ? 'block' : 'none'};
  outline: none;
`;
