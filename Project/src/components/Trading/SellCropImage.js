import classes from './SellCropImage.module.css';
import img from '../../assets/trading/i4.jpg';

function SellCropImage(){
    return(
        <div>
            <img src={img} alt="error" className={classes.backGroundImage}></img>
        </div>
    );
}

export default SellCropImage; 