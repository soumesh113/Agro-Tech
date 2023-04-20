import classes from './PredictionsBody.module.css'
import img1 from '../../assets/predictions/dailyNews.jpg'
import img2 from '../../assets/predictions/fertiliser.jpg'
import img3 from '../../assets/predictions/crops.jpg'
import {Link } from 'react-router-dom';

const PredictionsBody=()=>{
    return<div className={classes.main}> <div className={classes.row}>
    <div className={classes.column}>
      <div className={classes.card}>
      <div className={classes.card}>
          <img src={img3}  className={classes.img}></img>
          <div>
            <div className={classes.title}>Fertilizers</div>
            <div className={classes.text}>This predicts best fertiliser that should be used while farming. This gives breif review about 
                    it's chemical complexity and toxicity.</div>
          </div>
          <span className={classes.price}>No Cost</span>
          <Link to="/fertilizer"><button className={classes.button}>get Started</button></Link>
      </div>
      </div>
    </div>
    <div className={classes.column}>
      <div className={classes.card}>
      <div className={classes.card}>
          <img src={img2}  className={classes.img}></img>
          <div>
            <div className={classes.title}>Crop Predictions</div>
            <div className={classes.text}>Crop Prediction is very essential since it gives idea about which crop to grow in a 
                    particular climatic condition.It also takes care about the soil used on the land. </div>
          </div>
          <span className={classes.price}>No Cost</span>
          <Link to="/crop_recommendation"><button className={classes.button}>get Started</button></Link>
      </div>
      </div>
    </div>
    <div className={classes.column}>
      <div className={classes.card}>
      <div className={classes.card}>
          <img src={img1}  className={classes.img}></img>
          <div>
            <div className={classes.title}>Daily News</div>
            <div className={classes.text}>This gives you recent updates in agroTech field and other exciting news in the country
                    which are beneficial for farmers.</div>
          </div>
          <span className={classes.price}>No Cost</span>
          <button className={classes.button}>Get Started</button>
      </div>
      </div>
    </div>
  </div>
  </div>
}
export default PredictionsBody;
