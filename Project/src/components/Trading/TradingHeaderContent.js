import classes from './TradingHeaderContent.module.css';
const TradingHeaderContent=()=>{
    return <div>
    <div className={classes.mainHeading}>
        <div>Get the best price for your crops </div>
    </div>
    <div className={classes.description}>
        <p>No need to for any traders in between , get the money you deserve</p>
        <p>Prices according to goverment policy, no more froud !</p>
    </div>
    <div>
     <button className={classes.btn}>Buy Now</button>
     <button className={classes.btn}>Sell Now</button>
    </div>
 </div>
}
export default TradingHeaderContent;