import classes from './FilterCategory.module.css';

function FilterCategory(props){
    return(
        <div className={classes.DropdownCategory}>
          <form onSubmit={props.OnSave}>
              <label for="cars">Category  :    </label>
              <select name="Equipment" className="Equipment" value={props.value} onChange={props.onChange}>
                <option value="Tracter">Tracter</option>
                <option value="Harvester">Harvester</option>
                <option value="Tools">Tools</option>
              </select>
              <button>Search</button>
          </form>
          </div>
    );
}

export default FilterCategory;