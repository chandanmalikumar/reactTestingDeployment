import React from 'react'
import Child from './Child';

const Parent = ({user}) => {
    // const { name, age } = user;
  return (
    <div>
        {/* My name is {name} and my age is {age}. */}
        {/* <Child {... user}/> */}
        <h2>Parent Comp</h2>
        <Child/>
    </div>
  );
};

export default Parent