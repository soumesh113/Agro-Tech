import classes from './FilterSearch.module.css';

function FilterSearch(props){
    return(
        <div className={classes.searchContainer}>
              <form onSubmit={props.OnSave}>
                  <input type="text" placeholder="Search.." name="search" value={props.value} onChange={props.onChange} className={classes.inputValue} />
                  <button type="submit" className={classes.submitSearch} onClick={props.onHandler}>Search</button>
              </form>
          </div>
    );
}

export default FilterSearch;