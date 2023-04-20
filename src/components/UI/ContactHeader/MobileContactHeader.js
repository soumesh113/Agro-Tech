import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import classes from './MobileContactHeader.module.css';
const MobileContactHeader=()=>{
   return <nav className={classes.navComponent}>
   <FontAwesomeIcon className={classes.navIcon} icon={faEnvelope} size="1x"/>
   <span className={classes.navElement}> support@yourdomin.tld</span>
   <FontAwesomeIcon className={classes.navIcon} icon={faMobileAlt} />
   <span className={classes.navElement}> +6221.2002.2012</span>
</nav>
}
export default MobileContactHeader;