import { useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Additem from "./components/Meals/Additem";
function EquipmentMain() {
  const [cartIsShown,setCartIsshown]=useState(false);
  const [currentMode,setMode]=useState(0);
  var element= <Meals></Meals>
  if(currentMode==1)
  {
    element=<Additem></Additem>
  }
  const formHandler=()=>{
    if(currentMode==0)
    setMode(1);
  }
  const showCartHandler=()=>{
    setCartIsshown(true);
  }
  const hideCartHandler=()=>{
    setCartIsshown(false);
  }
  return (
    <div>
        <CartProvider>
          {cartIsShown&&<Cart onClose={hideCartHandler} ></Cart>}
          <Header onShowCart={showCartHandler} onForm={formHandler}></Header>
          <main>
           {element}
          </main> 
        </CartProvider>
    </div>
  );
}

export default EquipmentMain;

