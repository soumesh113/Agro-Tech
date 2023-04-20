import React from "react";
import MainPageBody1 from "../mainPage/mainPageBody/MainPageBody1";
import MainPageBody2 from "../mainPage/mainPageBody/MainPageBody2";
import MainPageBody3 from "../mainPage/mainPageBody/MainPageBody3";
import AboutUsBody1 from "./AboutUsBody1";
import Img from '../../assets/mainPage/header1.jpeg';
import classes from './AboutUs.module.css';
import AboutUsHeaderOverlay from "./AboutUsHeaderOverlay";
const AboutUs = ()=> {
    return (
        <React.Fragment>
           <div style={{backgroundImage: `url(${Img})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
            <div className={classes.title}>EasyFarm Farming solutions</div>
           </div>
            <AboutUsHeaderOverlay></AboutUsHeaderOverlay>
            <MainPageBody1 />
            <MainPageBody2 />
            <AboutUsBody1 />
            <MainPageBody3 />
        </React.Fragment>
    );
}

export default AboutUs;