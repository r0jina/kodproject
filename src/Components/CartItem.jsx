import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
// import { CartItemType } from "../App";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    fontFamily: " Arial, Helvetica, sans-serif",
    borderBottom: "1px solid lightblue",
    paddingBottom: 20,
  },
  div: {
    flex: 1,
  },
  info: { display: "flex", justifyContent: "space-between" },
  btns: { display: "flex", justifyContent: "space-between" },
  img: {
    maxWidth: 80,
    objectFit: "cover",
    marginLeft: 40,
  },
});

const CartItem = ({ item, addToCart, removeFromCart }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.div}>
        <h3>{item.title}</h3>
        <div className={classes.info}>
          <p>Price: ${item.price}</p>
          <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className={classes.btns}>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <p>{item.amount}</p>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
        </div>
      </div>
      <img className={classes.img} src={item.image} alt={item.title} />
    </div>
  );
};

export default CartItem;
