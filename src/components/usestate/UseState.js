import React ,{useState} from 'react'
import { Button } from 'reactstrap';
import AddIcon from '@material-ui/icons/Add';
import MinimizeRoundedIcon from '@material-ui/icons/MinimizeRounded';
export const UseState = () => {

    const [count ,setCount]=useState(0);

  return (
    <div className='container mt-5 input-group'>

        <Button className="btn btn-primary m-4" 
        onClick={()=>setCount(count+1)}><AddIcon/>
        </Button>
        
        <h1 className='m-4'>{count}</h1> 

        <Button className="btn btn-danger m-4 "
        //  onClick={()=> {
        //  if(count === 0){
        //  setCount(0)
        //  }else
        // setCount(count-1)
        
        // }}>

        onClick={()=> (count === 0) ? (setCount(0)):(setCount(count-1))}>
        
        <MinimizeRoundedIcon/>
         </Button>

    </div>
  );
};
