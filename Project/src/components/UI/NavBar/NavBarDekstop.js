
import Logo from '../../../assets/logo.png';
import classes from './NavBarDekstop.module.css';
import {Link} from "react-router-dom";
const NavBarDekstop=(props)=>{
    const element=<button onClick={props.startHandler} >Get Started</button>;
    
    return <header className={classes.nav}>
        <img src={Logo} alt="logo" className={classes.logo}></img>
        <span className={classes.NavOptions}>
            <a className={classes.options}><Link to="/">Home</Link></a>
            <a className={classes.options}><Link to="/aboutUs">About Us</Link></a>
            <a className={classes.options}><Link to="/equipments">Equipments</Link></a>
            <a className={classes.options}><Link to="predictions">Predictions</Link></a>
            <a className={classes.options}><Link to="/trading">Trading</Link></a>
            <button onClick={props.startHandler} >Get Started</button>
        </span>
    </header>
}
export default NavBarDekstop;