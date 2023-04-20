import React,{useState} from "react";
import { FaBars } from 'react-icons/fa';
import classes from './NavBarMobile.module.css';
import Logo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';
const NavBarMobile=(props)=>{
    const[currentMode,setMode]=useState(0);
    const expantionHandler=()=>{
        if(currentMode===0)
        setMode(1);
        else
        setMode(0);
    }
    var content=<div>
        <img src={Logo} alt="logo" className={classes.logo}></img>
        <button className={classes.toggle} onClick={expantionHandler}><FaBars></FaBars></button></div>;
    if(currentMode===1)
    content=<div>
        <span className={classes.toggleContent}>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/aboutUs">About Us</Link></div>
            <div><Link to="predictions">Predictions</Link></div>
            <div><Link to="/equipments">Equipments</Link></div>
            <div><Link to="/trading">Trading</Link></div>
            <div><button className={classes.getStarted} onClick={props.startHandler}>Get Started</button></div>
        </span>
        <button className={classes.toggle2} onClick={expantionHandler}><FaBars></FaBars></button>
        </div>
    return <header>{content}</header>
}
export default NavBarMobile;