import { useState } from "react";
import { useQuery } from "react-query";
import {
  Drawer,
  LinearProgress,
  Grid,
  Badge,
  createStyles,
  IconButton,
} from "@mui/material";
import { AddShoppingCartOutlined } from "@mui/icons-material";
import Item from "../Components/Item";
import Cart from "../Components/Cart";
import { Col, Row } from "react-bootstrap";

// const useStyles = createStyles({
//   wrapper: {
//     margin: 40,
//   },
//   iconBtn: {
//     position: "fixed",
//     zIndex: 100,
//     right: 20,
//     top: 20,
//   },
// });

function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const classes = useStyles();

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
    <div>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <IconButton>
        <Badge
          badgeContent={getTotalItems(cartItems)}
          color="error"
          onClick={() => setCartOpen(true)}
        >
          <AddShoppingCartOutlined />
        </Badge>
      </IconButton>
      <Row spacing={3} lg={3} xs={1}>
        {data?.map((item) => (
          <Col item key={item.id} sm={4} xs={12}>
            <Item item={item} handleAddtoCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Home;
