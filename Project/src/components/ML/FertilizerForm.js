import React, { useState } from "react";
import classes from './FertilizerForm.module.css';
import Input from "../Trading/Input";
function FertilizerForm() {
    const [current_data,set_data]=useState('');
    const [enteredNirogenContent, setNitrogenContent] = useState(0);
    const [enteredPhosphorusContent,setPhosphorusContent] = useState(0);
    const [enteredPotassiumContent,setPotassiumContent] = useState(0);
    const [enteredPh, setPh] = useState(0);
    const [enteredSoilType,setSoilType] = useState("");
    const [enteredCropType,setCropType] = useState("");
    const NitrogenContentChangeHandler = (event) => {
        setNitrogenContent(event.target.value);
    };
    const PhosphorusContentChangeHandler = (event) => {
        setPhosphorusContent(event.target.value);
    };
    const PotassiumContentChangeHandler = (event) => {
        setPotassiumContent(event.target.value);
    };
    const PhChangeHandler = (event) => {
        setPh(event.target.value);
    };
    const SoilTypeChangeHandler = (event) => {
        setSoilType(event.target.value);
    };
    const CropTypeChangeHandler = (event) => {
        setCropType(event.target.value);
    };
    
    const submitHandler = (event) => {
        event.preventDefault();
        const d = {
            N: enteredNirogenContent,
            P: enteredPhosphorusContent,
            K: enteredPotassiumContent,
            ph: enteredPh,
            soil: enteredSoilType,
            crop:enteredCropType,
            temp: 0,
            humid: 0, 
            moist:0
 
        }
        fetch("http://127.0.0.1:5000/fert_recommendation", 
     {
     method: 'POST',
    headers: {
        'Content-type': 'application/json',
      'Accept': 'application/json'
    },

     body:JSON.stringify(d)}).then(res=>{
     if(res.ok){
         return res.json();
    }else{
    alert("something is wrong")
    }}).then(jsonResponse=>{

        set_data(jsonResponse.pre);
        setMode(1);
    } 
    ).catch((err) => console.error(err));

        setNitrogenContent(0);
        setPhosphorusContent(0);
        setPotassiumContent(0);
        setPh(0);
        setCropType("");
        setSoilType("");
    }
;
const [mode,setMode] = useState(0);
const [cmode1,setc1]=useState(0);
const c1Handler=()=>{
    if(cmode1==0)
    setc1(1);
    else
    setc1(0);
}
    var element = <div className={classes.result}>Fill the details to get result.</div>;
    if(mode==1)
    element=<div className={classes.result}>You should grow <div className={classes.finalResult}>{current_data}</div></div>
    var c1=<div></div>
    if(cmode1==1)
    c1=<div>possible options are Loamy,Sandy,Clayey,Black,Red</div>
    return (
        <React.Fragment>
        <div className={classes.card1}>
        <div className={classes.card}>
            <form onSubmit={submitHandler}>
            <div>
                <Input name="nitrogen" placeholder="Enter Nitrogen Content..." value={enteredNirogenContent} handler={NitrogenContentChangeHandler} type="number"></Input>
                <Input name="phosphorus" placeholder="Enter Phosphorus Content..." value={enteredPhosphorusContent} handler={PhosphorusContentChangeHandler} type="number"></Input>
                <Input name="potassium" placeholder="Enter Potassium Content..." value={enteredPotassiumContent} handler={PotassiumContentChangeHandler} type="number"></Input>
                <Input name="ph" placeholder="Enter Ph..." value={enteredPh} handler={PhChangeHandler} type="number"></Input>
                <Input name="soil" placeholder="Enter Soil Type..." value={enteredSoilType} handler={SoilTypeChangeHandler} type="text"  onFocus={c1Handler} onBlur={c1Handler}></Input>
                {c1}
                <Input name="crop" placeholder="Enter Crop Type..." value={enteredCropType} handler={CropTypeChangeHandler} type="text"></Input>
                
                <button type="submit" className={classes.right}>Submit</button>
            </div>
             
            </form>
        </div>
        </div>
        {element}
        </React.Fragment>
    );
}

export default FertilizerForm;