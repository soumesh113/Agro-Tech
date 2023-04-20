import React,{useState,useEffect} from "react";
import img1 from '../../assets/trading/i1.jpg';
import img2 from '../../assets/trading/i2.jpg';
import img3 from '../../assets/trading/i3.jpg';
import TradingHeaderContent from "./TradingHeaderContent";
const TradingHeader=()=>{
    const[mode,setMode]=useState(0);
    var element=<div style={{backgroundImage: `url(${img1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} ><TradingHeaderContent></TradingHeaderContent></div>
    if(mode===1){
    element=<div style={{backgroundImage: `url(${img2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} ><TradingHeaderContent></TradingHeaderContent></div>}
    if(mode===2){
        element=<div style={{backgroundImage: `url(${img3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}><TradingHeaderContent></TradingHeaderContent></div>
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            setMode(mode=>(mode+1)%3);
        },5000);
        return ()=>clearInterval(interval);
    })
    return <div>{element}</div>
};
export default TradingHeader;