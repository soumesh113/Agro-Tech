import { useContext } from 'react';
import CartContext from'../../store/CartContext';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
const Cart=props=>{
    const cartCtx=useContext(CartContext);
     var totalAmount=`$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems=cartCtx.items.length>0;
    const cartItemRemoveHandler=( id) =>{
      cartCtx.removeItem(id);
    };
    const cartItemAddHandler= (item)=>{
      cartCtx.addItem({...item,amount:1});
    };
    const cartItems=(
        <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => (
          <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>
        ))}
      </ul>
    );
    const orderHandler=()=>{
      if(1)
      {
        console.log("yes");
        fetch("http://localhost:5000/order",{
          method:"POST",
          crossDomain:true,
          headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
          },
          body:JSON.stringify({
            username:window.localStorage.getItem("username"),
            address:window.localStorage.getItem("address"),
            items:cartCtx.items,
            totalAmount:totalAmount
          })
        }).then((res)=>res.json())
        .then((data)=>{
          console.log(data,"user registration");
          if(data.status=="saved"){
            alert("Registration successfull");
          
          }
          else
          alert("something went wrong");
        })
      }
      else
      {
        alert("please login first");
      }
      
    }
    return (<Modal onClose={props.onClose}>
        <div>
        {cartItems}
        <div>Total Amount</div>
        <div>{totalAmount}</div>
    </div>
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems&&<button className={classes.button} onClick={orderHandler}>Order</button>}
    </div>
    </Modal>
    );
};
export default Cart;