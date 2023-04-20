import React,{useEffect,useState} from "react";
import MobileContactHeader from "./MobileContactHeader";
import DekstopContactHeader from "./DekstopContactHeader";
const ContactHeader=()=>{
    const [width,setWidth]=useState(window.innerWidth);
    const breakpoint=760;
    useEffect(()=>{
        window.addEventListener("resize",()=>setWidth(window.innerWidth));
    })
    return width<breakpoint ?<MobileContactHeader></MobileContactHeader>:<DekstopContactHeader></DekstopContactHeader>
};
export default ContactHeader;