import React, { useState } from "react";
// import classes from './SellEquipment.module.css';
import Input from "../../../Trading/Input";
import classes from '../../../Trading/SellCropForm.module.css';

function Additemform() {

    const [enteredUsername, setEnteredUsername] = useState("");

    const [enteredEquipmentName,setEquipmentName] = useState("");
    const [enteredPrice,setEnteredPrice] = useState(0);
    const [enteredDescription,setEnteredDescription] = useState("");
    const [enteredImage,setEnteredImage] = useState("");

    const [enteredQuantity,setQuantity] = useState(0);
    const [enteredUserPhoneNumber, setEnteredPhoneNumber] = useState("");
    const [enteredUserCountry, setEnteredCountry] = useState("");
    const [enteredUserAddress, setEnteredAddress] = useState("");
    const [enteredUserState, setEnteredState] = useState("");
    const [enteredUserCity, setEnteredCity] = useState("");
    const [enteredUserPostalCode, setEnteredPostalCode] = useState("");


   
    const UsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const EquipmentNameChangeHandler = (event) => {
        setEquipmentName(event.target.value);
    };
    const PriceChangeHandler = (event) => {
        setEnteredPrice(event.target.value);
    };
    const DescriptionChangeHanlder = (event) => {
        setEnteredDescription(event.target.value);
    };
    const imageChangeHandler = (event) => {
        setEnteredImage(event.target.value);
    };
    const QuantityChangeHandler = (event) => {
        setQuantity(event.target.value);
    };
    const PhoneNumberChangeHandler = (event) => {
        setEnteredPhoneNumber(event.target.value);
    };
    const CountryChangeHandler = (event) => {
        setEnteredCountry(event.target.value);
    };
    const AddressChangeHandler = (event) => {
        setEnteredAddress(event.target.value);
    };
    const StateChangeHandler = (event) => {
        setEnteredState(event.target.value);
    };
    const CityChangeHandler = (event) => {
        setEnteredCity(event.target.value);
    };
    const PostalCodeChangeHandler = (event) => {
        setEnteredPostalCode(event.target.value);
    };

    // const submitHandler = (event) => {
    //     event.preventDefault();
    //     const ExpenseData = {
    //         username: enteredUsername,
    //         equipmentname: enteredEquipmentName,
    //         enteredprice:enteredPrice,
    //         entereddescription:enteredDescription,
    //         enteredimage:enteredImage,
    //         quantity: enteredQuantity,
    //         user_Phone_number: enteredUserPhoneNumber,
    //         user_country: enteredUserCountry,
    //         user_state: enteredUserState,
    //         user_address: enteredUserAddress,
    //         user_city: enteredUserCity,
    //         user_postal_code: enteredUserPostalCode,
    //     };
    //     console.log(ExpenseData);

    //     setEnteredUsername("");
    //     setEquipmentName("");
    //     setEnteredPhoneNumber("");
    //     setEnteredCountry("");
    //     setEnteredCity("");
    //     setEnteredState("");
    //     setEnteredAddress("");
    //     setEnteredPostalCode("");
    //     setEnteredPrice(0);
    //     setEnteredDescription("");
    //     setEnteredImage("");
    // };





const handleSubmit = (event) => {
    event.preventDefault();



    if(1)
    {
      console.log("yes");
      fetch("http://localhost:5000/sell_equipment",{
        method:"POST",
        crossDomain:true,
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            username: enteredUsername,
            equipmentname: enteredEquipmentName,
            enteredprice:enteredPrice,
            entereddescription:enteredDescription,
            enteredimage:enteredImage,
            quantity: enteredQuantity,
            user_Phone_number: enteredUserPhoneNumber,
            user_country: enteredUserCountry,
            user_state: enteredUserState,
            user_address: enteredUserAddress,
            user_city: enteredUserCity,
            user_postal_code: enteredUserPostalCode,
        })
      }).then((res)=>res.json())
      .then((data)=>{
        console.log(data,"Equipment saved");
        if(data.status=="saved"){
          alert("saved successfull");
        }
        else
        alert("something went wrong");
      })
    }



    setEnteredAddress('');
    setEnteredCity('');
    setEnteredCountry('');
    setEnteredPhoneNumber('');
    setEnteredPostalCode('');
    setEnteredState('');
    setEnteredUsername('');
    setEquipmentName('');
    setQuantity(0);
    setEnteredPrice(0);
    setEnteredDescription("");
    setEnteredImage("");

  };
    return (
        <div className={classes.card1}>
        <div className={classes.card}>
            <form onSubmit={handleSubmit}>
               <div>
                <Input name="username" placeholder="username..." value={enteredUsername} handler={UsernameChangeHandler} type="text"></Input>
                <Input name="Equipment Name" placeholder="Equipment Name..." value={enteredEquipmentName} handler={EquipmentNameChangeHandler} type="text"></Input>
                <Input name="Price Value" placeholder="Enter price..." value={enteredPrice} handler={PriceChangeHandler} type="number"></Input>
                <Input name="Description" placeholder="Description..." value={enteredDescription} handler={DescriptionChangeHanlder} type="textbox"></Input>
                <Input name="image" placeholder="image..." value={enteredImage} handler={imageChangeHandler} type="file"></Input>
                
                <Input name="Quantity" placeholder="quantity..." value={enteredQuantity} handler={QuantityChangeHandler} type="number"></Input>
                <Input name="Mobile Number" placeholder="Mobile Number..." value={enteredUserPhoneNumber} handler={PhoneNumberChangeHandler} type="text"></Input>
                
                {/* <button onClick={props.onBack} className={classes.left}>Back</button>
                <button onClick={nextHandler} className={classes.right}>Next</button> */}

 
                    <Input name="Country" placeholder="Country..." value={enteredUserCountry} handler={CountryChangeHandler} type="text"></Input>
                    <Input name="Address" placeholder="address..." value={enteredUserAddress} handler={AddressChangeHandler} type="text"></Input>
                    <Input name="State" placeholder="state..." value={enteredUserState} handler={StateChangeHandler} type="text"></Input>
                    <Input name="City" placeholder="city..." value={enteredUserCity} handler={CityChangeHandler} type="text"></Input>
                    <Input name="Postal Code" placeholder="postal code..." value={enteredUserPostalCode} handler={PostalCodeChangeHandler} type="text"></Input>
                    {/* <button onClick={backHandler} className={classes.left}>Back</button> */}
                    <button type="submit" className={classes.right}>Submit</button>
                
                </div>;
            </form>
        </div>
        </div>
    );
}

export default Additemform;