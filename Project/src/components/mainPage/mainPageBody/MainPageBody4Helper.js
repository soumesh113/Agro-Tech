import classes from './MainPageBody4Helper.module.css';
import img from '../../../assets/mainPage/i2.jpg';
const MainPageBody4Helper=(props)=>{
    return(
      <div className={classes.card}>
         <div>
             <div className={classes.title}>{props.title}</div>
            <div className={classes.text}>{props.text1}</div>
         </div>
        <img src={props.img}  className={classes.img}></img>
        <div className={classes.text}>{props.text2}</div>
          <button className={classes.button}>Learn More</button>
      </div>

    );
}
export default MainPageBody4Helper;