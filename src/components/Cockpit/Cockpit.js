import React, { useEffect } from 'react';

import classes from './Cockpit.css';

const cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    //http request...

    setTimeout(()=>{
      alert('test')
    },1000);

    return () => {
      console.log('[Cockpit.js] Clean up work in useEffect');
    }
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] Clean up work in 2nd useEffect');
    }
  });

  // useEffect();

  const assignClasses = [];
  let btnClass = '';

  if(props.showPersons)
    btnClass = classes.Red;

  if(props.personsLength <=2)
    assignClasses.push(classes.red);
  if(props.personsLength <= 1)
    assignClasses.push(classes.bold);

  return(
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(' ')}>This is really working</p>

      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  )
};

export default React.memo(cockpit);
