import Signup from "./SignUp";
import Login from './Login';

import { useState } from "react";
const MainUserPopUp=()=>{
    const swapHandler=()=>{
        if(currentMode==0)
        setMode(1);
        else
        setMode(0);
    }
    const [currentMode,setMode]=useState(0);
    var element=<Signup onSwap={swapHandler}></Signup>
    if(currentMode==1)
    {
        element=<Login onSwap={swapHandler}></Login>
    }
   
   return <div>
    {element}
    </div>
}
export default MainUserPopUp;