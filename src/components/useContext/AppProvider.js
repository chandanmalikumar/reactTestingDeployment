import React,{createContext} from 'react'
const AppContext = createContext();
const AppProvider=({children})=>{
const userData ={
  name:"vinod",
  age:28
};
  return  <AppContext.AppProvider value={userData}>{children}</AppContext.AppProvider>;
  
  };

export {AppContext,AppProvider};
