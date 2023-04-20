import React, { useState } from "react";
import classes from './SellCropForm.module.css';
import Input from "./Input";
function SellCrop(props) {

    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredProductName,setProductName] = useState("");
    const [enteredQuantity,setQuantity] = useState(0);
    const [enteredUserCountry, setEnteredCountry] = useState("");
    const [enteredUserPhoneNumber, setEnteredPhoneNumber] = useState("");
    const [enteredUserAddress, setEnteredAddress] = useState("");
    const [enteredUserState, setEnteredState] = useState("");
    const [enteredUserCity, setEnteredCity] = useState("");
    const [enteredUserPostalCode, setEnteredPostalCode] = useState("");


   
    const UsernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ProductNameChangeHandler = (event) => {
        setProductName(event.target.value);
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

    const submitHandler = (event) => {
        event.preventDefault();
        const ExpenseData = {
            username: enteredUsername,
            productname: enteredProductName,
            quantity: enteredQuantity,
            user_Phone_number: enteredUserPhoneNumber,
            user_country: enteredUserCountry,
            user_state: enteredUserState,
            user_address: enteredUserAddress,
            user_city: enteredUserCity,
            user_postal_code: enteredUserPostalCode,
        };
        console.log(ExpenseData);

        setEnteredUsername("");
        setProductName("");
        setQuantity("");
        setEnteredPhoneNumber("");
        setEnteredCountry("");
        setEnteredCity("");
        setEnteredState("");
        setEnteredAddress("");
        setEnteredPostalCode("");
    };

    const [currentMode,setMode] = useState(0);
    const nextHandler =()=> setMode(1);
    const backHandler =()=> setMode(0);

    
    var element=<div>
    <Input name="username" placeholder="username..." value={enteredUsername} handler={UsernameChangeHandler} type="text"></Input>
    <Input name="Product Name" placeholder="Product Name..." value={enteredProductName} handler={ProductNameChangeHandler} type="text"></Input>
    <Input name="Quantity" placeholder="quantity..." value={enteredQuantity} handler={QuantityChangeHandler} type="number"></Input>
    <Input name="Mobile Number" placeholder="Mobile Number..." value={enteredUserPhoneNumber} handler={PhoneNumberChangeHandler} type="text"></Input>
    
    <button onClick={props.onBack} className={classes.left}>Back</button>
    <button onClick={nextHandler} className={classes.right}>Next</button>
    </div>;
    if(currentMode==1)
    element=<div>
    <Input name="Country" placeholder="Country..." value={enteredUserCountry} handler={CountryChangeHandler} type="text"></Input>
    <Input name="Address" placeholder="address..." value={enteredUserAddress} handler={AddressChangeHandler} type="text"></Input>
    <Input name="State" placeholder="state..." value={enteredUserState} handler={StateChangeHandler} type="text"></Input>
    <Input name="City" placeholder="city..." value={enteredUserCity} handler={CityChangeHandler} type="text"></Input>
    <Input name="Postal Code" placeholder="postal code..." value={enteredUserPostalCode} handler={PostalCodeChangeHandler} type="text"></Input>
    <button onClick={backHandler} className={classes.left}>Back</button>
    <button type="submit" className={classes.right}>Submit</button>
    </div>

    return (
        <div className={classes.card1}>
        <div className={classes.card}>
            <form onSubmit={submitHandler}>
               {element}
            </form>
        </div>
        </div>
    );
}

export default SellCrop;