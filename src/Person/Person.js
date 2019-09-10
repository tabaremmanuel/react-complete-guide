import React from 'react';

const person = props => (
  <div>
    <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
    {props.children}
  </div>
);

export default person;
