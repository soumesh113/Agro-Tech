import classes from './MainPageBody2.module.css';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import {Link} from 'react-router-dom';
import { FaLeaf,FaTractor,FaSeedling} from 'react-icons/fa';
const MainPageBody2=()=>{
     return <div className={classes.row}>
     <div className={classes.column}>
       <div className={classes.card}>
       <div className={classes.icon}   style={{ borderRadius: '50%', backgroundColor: 'green', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FaLeaf color="white" size="70px" />
    </div>
    <div>
      Now you can get the money you deserve.We provide services which allow you to sell crop at right price without any intermediary. Earn upto 50% most than the traditional way.
    </div>
    <div>
      <button className={classes.Arrow}>
      <Link to="trading"><AiOutlineArrowRight /></Link>
      </button>
    </div>
       </div>
     </div>
     <div className={classes.column}>
       <div className={classes.card2}>
       <div  className={classes.icon}  style={{ borderRadius: '50%', backgroundColor: 'green', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FaTractor color="white" size="70px" />
    </div>
    <div>
      Farming equipment can really cost a lot sometimes.we provide you here with facility through which you can buy, sell and rent old farming equipment with easy. 
    </div>
    <div>
      <button className={classes.Arrow}>
      <Link to="/equipments"><AiOutlineArrowRight /></Link>
      </button>
    </div>
       </div>
     </div>
     <div className={classes.column}>
       <div className={classes.card}>
       <div className={classes.icon} style={{ borderRadius: '50%', backgroundColor: 'white', width: '100px', height: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FaSeedling color="green" size="70px" />
    </div>
    <div>
      Confuse which crop to grow or not whether it will be profitable or not.Now use the one of the best Al model to know which crop to grow and most of your land. 
    </div>
    <div>
      <button className={classes.Arrow}>
      <Link to="predictions"><AiOutlineArrowRight /></Link>
      </button>
    </div>
       </div>
     </div>
    
   </div>;
}
export default MainPageBody2;

