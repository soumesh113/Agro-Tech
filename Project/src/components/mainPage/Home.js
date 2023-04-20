import MainPageHeader from "./mainPageHeader/MainPageHeader";
import React from "react";
import MainPageBody from "./mainPageBody/MainPageBody";
const Home=(props)=>{
    return <React.Fragment>
        <MainPageHeader mode={props.mode} getStartedHandler={props.getStartedHandler}></MainPageHeader>
        <MainPageBody></MainPageBody>
    </React.Fragment>
};
export default Home;