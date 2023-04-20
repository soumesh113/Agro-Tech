import classes from './TradingNav.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins,faShoppingBag} from '@fortawesome/free-solid-svg-icons';
const TradingNav=(props)=>{
    const hrStyle = {
        backgroundColor: '#40B555', 
        height: '3px',
        border: 'none'
      };
    return<nav >
     <hr style={hrStyle} />
     <button className={classes.btn} onClick={props.onSell}> <FontAwesomeIcon icon={faCoins}  />Sell Crop</button>
     <button className={classes.btn}><FontAwesomeIcon icon={faShoppingBag} />Buy Products</button>
     <hr style={hrStyle} />
    </nav>
}
export default TradingNav;