import classes from './FilterByType.module.css';

function FilterByType(){
    return(
        <div className={classes.RentBuy}>
              <form>
                  <input type="checkbox" className={classes.Rent} name="forRent" value="Rent" />
                  <label for="Rent"> For Rent</label><br></br>
                  <input type="checkbox" className={classes.Buy} name="ToBuy" value="Buy" />
                  <label for="Buy"> For Buy </label><br></br>
              </form>
          </div>
    );
}

export default FilterByType;