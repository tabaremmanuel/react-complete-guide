import React, { useEffect, useRef, useContext, useState } from "react";

import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  const [count, setCount] = useState(0);

  console.log(authContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    //http request...

    // setTimeout(()=>{
    //   alert('test')
    // },1000);

    toggleBtnRef.current.click();   

    return () => {
      console.log("[Cockpit.js] Clean up work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    document.title = 'You clicked '+count+' times';
    return () => {
      console.log("[Cockpit.js] Clean up work in 2nd useEffect");
    };
  });

  // useEffect();

  const assignClasses = [];
  let btnClass = "";

  if (props.showPersons) btnClass = classes.Red;

  if (props.personsLength <= 2) assignClasses.push(classes.red);
  if (props.personsLength <= 1) assignClasses.push(classes.bold);

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
      <p className={assignClasses.join(" ")}>This is really working</p>

      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
      <button onClick={() => setCount(count+1)}>Click me</button>
    </div>
  );
};

export default React.memo(cockpit);
