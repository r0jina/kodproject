import CartItem from "./CartItem";
import { CartItemType } from "../App";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    fontFamily: "Arial, Helvetica, sans-serif",
    width: 500,
    padding: 20,
  },
});

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  const classes = useStyles();

  const calculateTotal = (items) =>
    items.reduce((item, ack) => ack + item.amount * item.price, 0);

  return (
    <aside className={classes.wrapper}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      {/* <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2> */}
    </aside>
  );
};

export default Cart;
