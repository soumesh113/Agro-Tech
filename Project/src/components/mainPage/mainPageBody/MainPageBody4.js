
import classes from "./MainPageBody4.module.css";
import i1 from '../../../assets/mainPage/i1.jpg';
import i2 from '../../../assets/mainPage/i2.jpg';
import crops from '../../../assets/predictions/crops.jpg';
import fertiliser from '../../../assets/predictions/fertiliser.jpg';
import i3 from '../../../assets/mainPage/i3.jpg';
import i4 from '../../../assets/mainPage/i4.jpg';
import {Link} from 'react-router-dom'; 
const EquipmentList=()=>{
    return (
        <div class={classes.row }>
          <div className={classes.column}>
              <div className={classes.card}>
            <div>
                <div className={classes.title}>Equipments</div>
                <div className={classes.text}>Essential Equipments for farming</div>
            </div>
            <img src={i1}  className={classes.img}></img>
            <div className={classes.text}>Here you can buy or rent equipments as per your needs. </div>
              <Link to="/equipments"><button className={classes.button}>Learn More</button></Link>
          </div></div>
        <div className={classes.column}>
          <div className={classes.card}>
            <div>
                <div className={classes.title}>Earn Money</div>
                <div className={classes.text}>Sell your products at the best price</div>
            </div>
            <img src={i2}  className={classes.img}></img>
            <div className={classes.text}>No need for intermediatories, now sell goods directly to customers. </div>
            <Link to="/trading"><button className={classes.button}>Learn More</button></Link>
          </div>
          </div>

          <div className={classes.column}>
          <div className={classes.card}>
            <div>
                <div className={classes.title}>Buy Fresh grains</div>
                <div className={classes.text}>Get the best quality food grains at best price</div>
            </div>
            <img src={i3}  className={classes.img}></img>
            <div className={classes.text}>Buy grains directly from farmers with no adulteration.</div>
            <Link to="/trading"><button className={classes.button}>Learn More</button></Link>
          </div>
          </div>

          <div className={classes.column}>
          <div className={classes.card}>
            <div>
                <div className={classes.title}>Wondering which crop is best for you ?</div>
                <div className={classes.text}>No need to worry</div>
            </div>
            <img src={crops}  className={classes.img}></img>
            <div className={classes.text}>Use computer analysis to know which crop is best for your farm. </div>
            <Link to="/predictions"><button className={classes.button}>Learn More</button></Link>
          </div>
          </div>

          <div className={classes.column}>
          <div className={classes.card}>
            <div>
                <div className={classes.title}>Know about right fertilizer ? </div>
                <div className={classes.text}>No need to worry</div>
            </div>
            <img src={fertiliser}  className={classes.img}></img>
            <div className={classes.text}>Use latest analysis to know what best suits your land </div>
            <Link to="/predictions"><button className={classes.button}>Learn More</button></Link>
          </div>
          </div>

          <div className={classes.column}>
          <div className={classes.card}>
            <div>
                <div className={classes.title}>Sell your old Equipments</div>
                <div className={classes.text}>Sell your equipments here for better deals</div>
            </div>
            <img src={i4}  className={classes.img}></img>
            <div className={classes.text}> Use this to sell equipments with best price with 0 risks. </div>
            <Link to="/equipments"><button className={classes.button}>Learn More</button></Link>
          </div>
          </div>
        </div>
     )
}
export default EquipmentList;