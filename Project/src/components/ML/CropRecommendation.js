import React, { useState } from "react";
import classes from './CropRecommendation.module.css';
import Input from "../Trading/Input";



function CropRecommendation() {

    const [current_data,set_data]=useState('');
    const [enteredNirogenContent, setNitrogenContent] = useState(0);
    const [enteredPhosphorusContent,setPhosphorusContent] = useState(0);
    const [enteredPotassiumContent,setPotassiumContent] = useState(0);
    const [enteredPh, setPh] = useState(0);

   
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
    
    const submitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            nitrogen: enteredNirogenContent,
            phosphorus: enteredPhosphorusContent,
            potassium: enteredPotassiumContent,
            Ph: enteredPh,
 
        };
        console.log(ExpenseData);
        const d={
            "N": enteredNirogenContent,
            "P": enteredPhosphorusContent,
            "K": enteredPotassiumContent,
            "temp": 10,
            "humid": 10,
            "ph": enteredPh,
            "rainfall": 10
        }
        fetch("http://127.0.0.1:5000/crop_recommendation", 
     {
     method: 'POST',
    headers: {
        'Content-type': 'application/json',
      'Accept': 'application/json'
    },

     body:JSON.stringify(d)}).then(res=>{
     if(res.ok){
         return res.json()
    }else{
    alert("something is wrong")
}
}).then(jsonResponse=>{

    // console.log(jsonResponse)
    set_data(jsonResponse.pre);
    setMode(1);
} 
).catch((err) => console.error(err));

        setNitrogenContent(0);
        setPhosphorusContent(0);
        setPotassiumContent(0);
        setPh(0);

    };

    const [mode,setMode] = useState(0);
    var element = <div className={classes.result}>Fill the details to get result.</div>;
    if(mode==1)
    element=<div className={classes.result}>You should grow <div className={classes.finalResult}>{current_data}</div></div>

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
                
                <button type="submit" className={classes.right}>Submit</button>
            </div>
            </form>
        </div>
        </div>
          {element}
          </React.Fragment>

    );
}

export default CropRecommendation;