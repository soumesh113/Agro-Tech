import TradingNav from "./TradingNav";
import TradingHeader from "./TradingHeader";
import SellCropPanel from "./SellCropPanel";
import {useState} from 'react';
const TradingMainPage=()=>{
    const[currentMode,setMode]=useState(0);
    const FormVisiblityHandler=()=>{
        if(currentMode==0)
        setMode(1);
        else
        setMode(0);
    }
    
    return <div>
        <TradingNav onSell={FormVisiblityHandler}></TradingNav>
      {!currentMode&&<TradingHeader ></TradingHeader>}
      {currentMode&&<SellCropPanel onBack={FormVisiblityHandler}></SellCropPanel>}
    </div>;
}
export default TradingMainPage;