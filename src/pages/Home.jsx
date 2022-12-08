import { useState } from "react";
import { useQuery } from "react-query";
import { Drawer, LinearProgress, Grid, Badge, IconButton } from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import Item from "../Components/Item";
import Cart from "../Components/Cart";
import { Col, Navbar, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  wrapper: {
    marginTop: 80,
  },
  iconBtn: {
    position: "fixed",
    zIndex: 100,
    right: 20,
    top: 10,
  },
});

function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const classes = useStyles();
  const navigate = useNavigate();
  async function getAllProducts() {
    const path = "https://fakestoreapi.com/products";
    const response = await fetch(path, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }

  const { data, isLoading, error } = useQuery("products", getAllProducts);

  const getTotalItems = (items) =>
    items.reduce((acc, item) => acc + item.amount, 0);

  const handleAddToCart = (clickedItem) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      return isItemInCart
        ? prev.map((item) =>
            item.id === clickedItem.id
              ? { ...item, amount: item.amount + 1 }
              : item
          )
        : [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleItemClick = (id) => {
    navigate("/oneproduct", { state: id });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems((prev) =>
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [])
    );
  };

  if (error) return <p>Error</p>;

  return isLoading ? (
    <LinearProgress />
  ) : (
    <div className={classes.wrapper}>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Navbar className="bg-warning mt-0" fixed="top">
        <IconButton>
          <Badge
            badgeContent={getTotalItems(cartItems)}
            color="error"
            onClick={() => setCartOpen(true)}
          >
            <AddShoppingCartOutlined />
          </Badge>
        </IconButton>
      </Navbar>
      <Row spacing={3} lg={3} xs={1}>
        {data?.map((item) => (
          <Col item key={item.id} sm={4} xs={12}>
            <Item
              item={item}
              handleAddtoCart={handleAddToCart}
              handleItemClick={handleItemClick}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
