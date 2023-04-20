import React,{useEffect,useState} from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarDekstop from "./NavBarDekstop";
import MainUserPopUp from "../../User/MainUserPopUp";
import Modal from '../Modal/Modal';
const NavBar=(props)=>{
  
    const [width,setWidth]=useState(window.innerWidth);
    const breakpoint=860;
    useEffect(()=>{
        window.addEventListener("resize",()=>setWidth(window.innerWidth));
    })
    var navigationBar=<NavBarDekstop startHandler={props.getStartedHandler}></NavBarDekstop>
    if(width<breakpoint) 
    navigationBar=<NavBarMobile startHandler={props.getStartedHandler}></NavBarMobile>
    return (<div>
        {props.mode &&<Modal onClose={props.getStartedHandler}><MainUserPopUp></MainUserPopUp></Modal>}
        {navigationBar}
    </div>)
};
export default NavBar;