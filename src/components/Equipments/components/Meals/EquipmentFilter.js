import classes from './EquipmentFilter.module.css';
import FilterByPrice from './FilterForm/FilterByPrice';

import FilterSearch from './FilterForm/FilterSearch';
import {useState} from 'react';


const EquipmentFiter=()=>{
   //   return <div>
   //      vansh
   //   </div>
   
   // Search
   const [SearchText,setSearchTest] = useState("");
   const SubmitSearch=(event)=>{
      event.preventDefault();
      console.log(SearchText);
   }
   const SearchOnChangeHandler=(e)=>{
         setSearchTest(e.target.value);
   }

   //Type
   // const [isRent,setIsRent] = useState("");
   // const [isBuy,setIsBuy] = useState("");
   // const SubmitType = (event) => {
   //    event.preventDefault();
   //    console.log(isRent,isBuy);
   // }

   // const TypeOnChangeHandler = e =>{
      
   // }

   // Price
   // const [isPriceCheck,setIsPrice] = useState("");
   const [maxValue,setMaxValue] = useState("");
   function MaxValueChangeHandler(e){
      setMaxValue(e.target.value);
   }
   function SubmitValue(event){
      event.preventDefault();
      console.log(maxValue);
   }

   //Category
   const [Category,setCategory] = useState("");
   function SubmitCategory(event){
      event.preventDefualt();
      console.log(Category);
   }
   function CategoryChangeHandler(e){
      setCategory(e.target.value);
   }

   return (
      <div className={classes.card}>
          <fieldset className={classes.sortContainer}>
          <legend className={classes.heading}>Sort Items</legend>
            <FilterSearch OnSave={SubmitSearch} onChange={SearchOnChangeHandler} value={SearchText}/>
            {/* <FilterByType OnSave={SubmitType} onChange={TypeOnChangeHandler} value1={isRent} value2={isBuy} />  */}
            <FilterByPrice OnSave={SubmitValue} onChange={MaxValueChangeHandler} value={maxValue}/> 
            {/* <FilterCategory OnSave={SubmitCategory} onChange={CategoryChangeHandler} value={Category} />  */}
          </fieldset>
      </div>
   );
}
export default EquipmentFiter;

