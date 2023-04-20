import img from '../../../assets/mainPage/img1.png';
import classes from './MainPageBody1.module.css';
import {Link} from 'react-router-dom';
const MainPageBody1=()=>{
     return(
         <div className={classes.row }>
            <div className={classes.column1}>
            <div className={classes.card}>
            <div className={classes.content}>
                <div className={classes.content1}>WHO WE ARE</div>
                <div className={classes.content2}>We are here to help you with growing crop in a more scientific </div>
                <div className={classes.content3}>you can know which crop is best to grow on your farm</div>
                <div className={classes.content3}>you can buy and sell equipment and crops also on your side </div>
                <div className={classes.content3}>get the best price for your product</div>
                <Link to="/aboutUs"><button className={classes.btn}>DISCOVER MORE</button></Link>
                </div>
            </div>
            </div>
            <div className={classes.column2}>
            <div className={classes.card}>
               <img src={img} className={classes.image} alt="img"></img>
            </div>
            </div>
         </div>
     );
}
export default MainPageBody1;
