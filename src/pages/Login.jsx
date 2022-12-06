import React from "react";
import { Grid, ThemeProvider } from "@mui/material";
import { BreakPointsTheme } from "../Components/BreakPointsTheme";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Input from "antd/es/input/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  async function login(credentials) {
    return fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((data) => data.json())
      .catch((err) => {
        return err;
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reqBody = {
      username,
      password,
    };
    await login(reqBody)
      .then((data) => {
        localStorage.setItem("token", JSON.stringify(data));
        navigate("/home");
      })
      .catch((err) => {
        return err;
      });
  };
  return (
    <ThemeProvider theme={BreakPointsTheme}>
      <Grid
        container
        display="flex"
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <input
              type="name"
              className="form-control defaultinput bg6"
              style={{ borderRadius: "5px" }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <input
              type="password"
              className="form-control defaultinput bg6"
              style={{ borderRadius: "5px" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
