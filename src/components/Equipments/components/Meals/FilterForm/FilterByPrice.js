import classes from './FilterByPrice.module.css';

function FilterByPrice(props){
    return(
        <div className={classes.PriceCategory}>
              <h3 className={classes.heading}>Sort By Price</h3>
              <form onSubmit={props.OnSave}>
                  <input type="number" placeholder="Max value" className={classes.inputValue} value={props.value} onChange={props.onChange} />
                  <button className={classes.submitSearch} onClick={props.onHandler}>Search</button>
              </form>
          </div>
    );
}

export default FilterByPrice;