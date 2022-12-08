import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    width: "100%",
    border: "1px solid lightblue",
    borderRadius: 20,
    height: "100%",
  },
  btn: {
    borderRadius: "0 0 20px 20px",
  },
  img: {
    maxHeight: 250,
    objectFit: "cover",
    borderRadius: "20px 20px 0 0",
  },
  div: {
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: "1rem",
    height: "100%",
  },
});

const Item = ({ handleAddtoCart, item, handleItemClick }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <div className={classes.wrapper}>
      <div onClick={() => handleItemClick(item.id)}>
        <img src={item.image} alt="" width="100%" />
        <div className={classes.div}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h3>${item.price}</h3>
          <div className="d-flex align-items-center">
            <p className="mb-0">ratings :</p>
            <p className="mb-0">{item.rating.rate}</p>
          </div>
          <div className="d-flex align-items-center">
            <p className="mb-0">count :</p>
            <p className="mb-0">{item.rating.count}</p>
          </div>
        </div>
      </div>
      <Button onClick={() => handleAddtoCart(item)} className={classes.btn}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Item;
