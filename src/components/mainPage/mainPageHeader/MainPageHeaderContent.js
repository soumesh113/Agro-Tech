import { Link } from 'react-router-dom';
import classes from './MainPageHeaderContent.module.css';
const MainPageHeaderContent=(props)=>{
    return <div><div className={classes.heading}>
        <div>EasyFarm Farming </div>
        <div>Solutions</div>
    </div>
    <div className={classes.content}>
     <p>make the farming easy and profitable with best scientific solutions of EasyFarm farming solutions. </p>
      <p>buy and sell equipments,get best advice on you best grow with one of the best AL model around</p>
    </div>
    <span>
        <button className={classes.get_started} onClick={props.getStartedHandler}>Sign In</button>
        <Link to="/aboutUs"><button className={classes.learn_more}>Learn More</button></Link>
    </span>
    </div>
}
export default MainPageHeaderContent;
