import React, { useState } from 'react'

     const  Multiplelnputs = () => {
     const [userRegistration, setUserRegistration] = useState ({
        username:"",
        email:"",
        phone:"",
        password:""
    });
      const handleInput =(e) =>{
    const name = e.target.name;
    const value = e.target.value;
   console.log(name,value);
   setUserRegistration({...setUserRegistration,email:"testing",})
    }
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    }}>
     <p className="title">Registration Form</p>
    <form action="">

        <div>
            <label htmlFor="Usernmae" className='form-label'>Fullname</label>
            <input className='form-control' type="text" autoComplete="off"value ={userRegistration.username}onChange={handleInput}
            name="username" id="username"/>
        </div>
        <div>
            <label htmlFor="email">email</label>
            <input className='form-control' type="text" autoComplete="off"value ={userRegistration.email}onChange={handleInput}
            name="email"id="email"/>
        </div>
        <div>
            <label htmlFor="phone">phone</label>
            <input  className='form-control'type="text" autoComplete="off"value ={userRegistration.phone}onChange={handleInput}
            name="phone"id="phone"/>
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input className='form-control' type="text" autoComplete="off"value ={userRegistration.password}onChange={handleInput}
            name="password"id="password"/>
        </div>
        <button className='form-control' type="submit">Registration</button>
        </form>
    </div>
  );
};

export default Multiplelnputs;