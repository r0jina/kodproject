import { Grid } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OneProduct = () => {
  const location = useLocation();
  // console.log(location.state);

  const [oneproduct, setOneproduct] = useState({});
  const [success, setSuccess] = useState(false);

  async function getOneProducts(id) {
    const path = `https://fakestoreapi.com/products/${id}`;
    const response = await fetch(path, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  }
  const getProduct = async (id) => {
    await getOneProducts(id).then((data) => {
      setOneproduct(data);
      setSuccess(true);
    });
  };

  useEffect(() => {
    getProduct(location.state);
  }, [location.state]);
  useEffect(() => {
    console.log(oneproduct.title);
  }, [oneproduct]);

  return (
    <Grid
      container
      display="flex"
      flexDirection="row"
      alignItems="center"
      // height="auto"
      overflow="hidden"
    >
      <Grid item lg={4}>
        <img src={oneproduct.image} alt="" width="100%" />
      </Grid>
      <Grid item lg={8} marginTop="auto" marginBottom="auto">
        <div>{oneproduct.title}</div>
        <div>{oneproduct.price}</div>
        <div>{oneproduct.description}</div>
        <div>{oneproduct.category}</div>
        {/* <div>{oneproduct.rating.rate}</div>
        <div>{oneproduct.rating.count}</div> */}
      </Grid>
    </Grid>
  );
};
export default OneProduct;
