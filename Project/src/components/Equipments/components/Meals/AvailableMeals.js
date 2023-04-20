import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItems/MealItem";
import { useState } from "react";
import FilterByPrice from './FilterForm/FilterByPrice';
import FilterSearch from './FilterForm/FilterSearch';
import {useEffect} from "react";
const AvailableMeals = () => {
  const [SearchText,setSearchTest] = useState("");
  const SubmitSearch=(event)=>{
     event.preventDefault();
     console.log(SearchText);
  }
  const SearchOnChangeHandler=(e)=>{
        setSearchTest(e.target.value);
  }

  const [maxValue,setMaxValue] = useState(0);
  function MaxValueChangeHandler(e){
     setMaxValue(e.target.value);
  }
  function SubmitValue(event){
     event.preventDefault();
     console.log(maxValue);
  }

  const [Category,setCategory] = useState("");
  function SubmitCategory(event){
     event.preventDefualt();
     console.log(Category);
  }
  function CategoryChangeHandler(e){
     setCategory(e.target.value);
  }

  const [current_data,set_data]=useState([]);
  const mealsList = current_data.map((equipment) => (
    <MealItem
      key={equipment._id}
      id={equipment._id}
      name={equipment.Equipmentname}
      description={equipment.Description}
      price={10}
    ></MealItem>
  ));
    useEffect(() => {
      fetch("http://localhost:5000/equipments", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // hint,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set_data(data.data);
        if (data.status == "ok") {
          {};
        } else {alert("something went wrong")};
      });
    }, []);
  const fetchSearch = (event) => {
    console.log("yes");
    const d = { equip: SearchText}
    fetch("http://localhost:5000/searchE", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        d
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set_data(data.data);
        if (data.status == "saved") {
          alert("Registration successfull");
        } else alert("something went wrong");
      });
  };
  const fetchPrice = (event) => {
    console.log("yes");
    fetch("http://localhost:5000/searchP", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        // hint,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        set_data(data.data);
        if (data.status == "saved") {
          alert("Registration successfull");
        } else alert("something went wrong");
      });
  };
  return (
    <div className={classes.row}>
      <div className={classes.column1}>
        <div className={classes.filter}>
        <div className={classes.card}>
         <fieldset className={classes.sortContainer}>
         <legend className={classes.heading}>Sort Items</legend>
           <FilterSearch onHandler={fetchSearch} OnSave={SubmitSearch} onChange={SearchOnChangeHandler} value={SearchText}/>
           <FilterByPrice OnSave={SubmitValue} onChange={MaxValueChangeHandler} onHandler={fetchPrice} value={maxValue}/> 
         </fieldset>
     </div>
        </div>
      </div>
      <div className={classes.column2}>
        <div className={classes.meals}>
          <div className={classes.row}>{mealsList}</div>
         
        </div>
      </div>
    </div>
  );
};
export default AvailableMeals;
