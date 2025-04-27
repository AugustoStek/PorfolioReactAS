import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>Portfolio {props.name} {props.lastName}</h1>
      <hr />
    </div>
  );
};

export default Header;