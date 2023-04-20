import classes from './PredictionsHeaderContent.module.css';
import {Link } from 'react-router-dom';

const PredictionHeaderContent=()=>{
   return <div>
   <div className={classes.mainHeading}>
       <div>Bringing Most Accurate Analysis For Farmers</div>
   </div>
   <div className={classes.description}>
       <p>When it comes to data analysis in Agro Tech. Our website will give you most recent and accurate data with regular updates</p>
       <p >This website give you idea about these three most important factors in Farming</p>
   </div>
   <div>
   <Link to="/fertilizer"><button className={classes.btn}>Fertilizers</button></Link>
   <Link to="/crop_recommendation"><button className={classes.btn}>Crops</button></Link>
    <button className={classes.btn}>Daily News</button>
   </div>
</div>
}
export default PredictionHeaderContent;