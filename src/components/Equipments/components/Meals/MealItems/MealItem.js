import {useContext} from 'react';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/CartContext';
import img from '../../../assets/meals.jpg';
const MealItem= props=>{
    const cartCtx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;
    const addItemToCartHandler=amount=>{
        cartCtx.addItem({
          id:props.id,
          name:props.name,
          amount:amount,
          price:props.price
        });
    };
    return <div className={classes.column}>
    <div className={classes.card}>
        <img src={img} className={classes.img}></img>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div>
        <MealItemForm onAddToCart={addItemToCartHandler}></MealItemForm>
      </div>
    </div>
    </div>
};
export default MealItem;