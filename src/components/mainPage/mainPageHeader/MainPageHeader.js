import React,{useState,useEffect} from "react";
import img1 from '../../../assets/mainPage/header1.jpeg';
import img2 from '../../../assets/mainPage/Header1.jpg';
import img3 from '../../../assets/mainPage/Header3.jpg';
import MainPageHeaderContent from "./MainPageHeaderContent";
const MainPageHeader=( props)=>{
    const[mode,setMode]=useState(0);
    var element=<div style={{backgroundImage: `url(${img1})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} ><MainPageHeaderContent mode={props.mode} getStartedHandler={props.getStartedHandler}></MainPageHeaderContent></div>
    if(mode===1){
    element=<div style={{backgroundImage: `url(${img2})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} ><MainPageHeaderContent mode={props.mode} getStartedHandler={props.getStartedHandler}></MainPageHeaderContent></div>}
    if(mode===2){
        element=<div style={{backgroundImage: `url(${img3})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}><MainPageHeaderContent mode={props.mode} getStartedHandler={props.getStartedHandler}></MainPageHeaderContent></div>
    }
    useEffect(()=>{
        const interval=setInterval(()=>{
            setMode(mode=>(mode+1)%3);
        },5000);
        return ()=>clearInterval(interval);
    })
    return <div>{element}</div>
};
export default MainPageHeader;
