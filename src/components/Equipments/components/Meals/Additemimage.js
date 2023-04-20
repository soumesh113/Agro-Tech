import classes from './Additemimage.module.css';
import img from '../../../../assets/trading/i1.jpg'
function Additemimage(){
    return(
        <div>
            <img src={img} alt="error" className={classes.backGroundImage}></img>
        </div>
    );
}

export default Additemimage; 