import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const RiseUpTransition = ({ children, duration }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      style={{
        transition: `transform ${duration}ms ease-in-out`,
        transform: `translateY(${isVisible ? 0 : '20px'})`,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

RiseUpTransition.propTypes = {
  children: PropTypes.node.isRequired,
  duration: PropTypes.number.isRequired,
};

export default RiseUpTransition;
