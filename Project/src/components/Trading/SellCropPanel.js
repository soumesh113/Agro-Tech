import SellCrop from "./SellCrop";
import SellCropImage from "./SellCropImage";
import classes from './SellCropPanel.module.css';

function SellCropPanel(props){
    return(
        <div className={classes.row}>
            <div className={classes.column1}>
                <SellCropImage />
            </div>
            <div className={classes.column2}>
                <SellCrop onBack={props.onBack}/>
            </div>
        </div>
    );
}

export default SellCropPanel;