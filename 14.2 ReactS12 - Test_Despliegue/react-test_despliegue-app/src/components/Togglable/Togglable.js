import React from 'react';
import './Togglable.scss';

const Togglable = (props) => {
  const [visible, setVisible] = React.useState(false);
  const hideWhenVisible = { display: visible ? 'none' : 'block' };
  const showWhenVisible = { display: visible ? 'block' : 'none' };
  const toggleVisibility = () => setVisible(!visible);

  return (
    <div className='togglable'>
      <div style={hideWhenVisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={showWhenVisible} className='togglableContent'>
        {props.children}
        <button onClick={toggleVisibility}>Cerrar</button>
      </div>
    </div>
  );
};

export default Togglable;