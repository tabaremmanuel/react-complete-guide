import React from "react";
import "./Person.css";

const person = props => (
  <div className="Person">
    <p onClick={props.click}>
      I'm {props.name} and I am {props.age} years old!
    </p>
    {props.children}
    <input type="text" onChange={props.changed} value={props.name} />
  </div>
);

export default person;
