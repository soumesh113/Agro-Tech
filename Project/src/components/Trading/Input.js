import classes from './Input.module.css';
function Input(props){
    return(
        <div className={classes.field}>
          <div className={classes.name}><label>{props.name}:</label></div>
          <div className={classes.enter}><input  placeholder={props.placeholder} className={classes.inp}
              name={props.name}
              type={props.type}
              value={props.value}
              onChange={props.handler} /></div>
          </div>
    );
}

export default Input;