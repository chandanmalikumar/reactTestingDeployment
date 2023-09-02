import React, { useEffect, useState } from 'react'

export const ClearUp = () => {
    const[widthCount,setWidthCount]=useState(window.screen.width);
    const currentScreenWidth=()=>{
        setWidthCount(()=>window.innerWidth);

        return()=>{
            window.removeEventListener("resize",currentScreenWidth);
        }
    };
   
    useEffect(()=>{
        window.addEventListener("resize",currentScreenWidth);
    });

  return (
    <div>
        <h2>
            The size of window is <span> {widthCount} </span>
        </h2>
    </div>
  );
};
