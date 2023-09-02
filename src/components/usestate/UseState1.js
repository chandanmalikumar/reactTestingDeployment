import React, { useState } from 'react'

export const UseState1 = () => {

  const[formData,setFormData]=useState({
    email:"",
    name:"",
    password:"",
    conform_password:""
  });

  const  handleInput = (event) =>{
    const email=event.target.email;
    const value=event.target.value;
    const name=event.target.name;
    const password=event.target.password;
    const conform_password=event.target.conform_password;
    // console.log(name,value)
     setFormData((prev)=>{
      
      return {...prev,[name] : value};
      
     });
  };

  return (
    <div className='container'>
        <div className='card'>
            <h1 className='card-title text-center text-primary'>Register</h1>
            <div className='card-body'>
            <form>

             <div className="form-group mt-3">
             <label>Email address</label>
             <input type="email"
              className="form-control" 
               placeholder="Enter email"
               id="email"
               name="email"
               autoComplete='off'
               value={formData.email}
               onChange={handleInput}
               />
             </div>

             <div className="form-group mt-3">
             <label>Enter name</label>
             <input type="text"
              className="form-control" 
               placeholder="Enter name"
               id="name"
               name="name"
               autoComplete='off'
               value={formData.name}
               onChange={handleInput}
               />
               
             </div>
              
             <div className="form-group mt-3">
             <label>Enter Password</label>
             <input type="password"
              className="form-control" 
               placeholder="Enter password"
               id="password"
               name="password"
               autoComplete='off'
               value={formData.password}
               onChange={handleInput}
               />
             </div>

             <div className="form-group mt-3">
             <label>Conform Password</label>
             <input type="password"
              className="form-control" 
               placeholder="Conform password"
               id="conform_password"
               name="conform_password"
               autoComplete='off'
               value={formData.conform_password}
               onChange={handleInput}
               />
             </div>
          
            <button type="submit" className="btn btn-primary mt-4 ">Submit</button>
            <br/> <br/>
            <label>{`My name is ${formData.name} and email is ${formData.email} and password ${formData.password} and conform password ${formData.conform_password} `}</label>
            </form>
            </div>
        </div>
    </div>
  );
};
