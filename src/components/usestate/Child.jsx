import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../../useContext/AppProvider';
const Child = () => {

    // const {name, age} = user;
    const userData = useContext(AppContext);
    console.log( " ~ file: Child.jsx ~ line 8 ~ Chlild ~ userData" , userData);

  return (
    <div>Child = My name is {userData.name} and my age is {userData.age}.{" "}</div>
  );
};
export default Child;