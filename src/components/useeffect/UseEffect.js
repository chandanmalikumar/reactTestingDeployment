import React ,{useEffect, useState} from 'react'
import { Button } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import MinimizeRoundedIcon from '@material-ui/icons/MinimizeRounded';

export const UseEffect = () => {
    const [count ,setCount]=useState(0);

    const countUpdate = (val)=>{

     if(val === "inc") return setCount(count + 1);

     if(val === "dec" ) return setCount(count - 1);
   };
    useEffect(()=>{
      document.title=count;
    },[count]);

  return (
    <div className='container mt-5 input-group'>

        <Button className="btn btn-primary m-4" 
        onClick={()=>countUpdate("inc")}>
          <AddIcon/>
        </Button>
        
        <h1 className='m-4'>{count}</h1> 

        <Button className="btn btn-danger m-4 "
        onClick={()=> countUpdate ("dec")}>
        
        <MinimizeRoundedIcon/>
         </Button>
    </div>
  );
  };
