import React from "react";
import classes from './AboutUsBody1.module.css'
import img from '../../assets/AboutUs/aboutUs1.png';

function AboutUsBody1() {
    return (
    
        <div >
          <div>
            <div className={classes.title}>International hydroponic cultivation projects.</div>
            <div className={classes.text}><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><p>Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p></div>
          </div>
          <img src={img}  className={classes.img}></img>

          {/* <div className={classes.content}>
         <div className={classes.card2}><div className={classes.value}>27+</div><div className={classes.description}>Countries</div></div>
         <div className={classes.card2}><div className={classes.value}>2.9M+</div><div className={classes.description}>Heactares Field</div></div>
         <div className={classes.card2}><div className={classes.value}>87K+</div><div className={classes.description}>Happy Farm's</div></div>
         <div className={classes.card2}><div className={classes.value}>25+</div><div className={classes.description}>Years Experience</div></div>
       </div> */}
         
         </div>
      
    );
}

export default AboutUsBody1;