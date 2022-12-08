import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Alert, Grid, Snackbar, ThemeProvider } from "@mui/material";
import { BreakPointsTheme } from "../Components/BreakPointsTheme";
import { useState } from "react";
import { register } from "../common";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UserValidator } from "../Validation";

const Register = () => {
  const [success, setSuccess] = useState(false);

  const [values, setValues] = useState({
    email: "",
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    street: "",
    number: "",
    phone: "",
    errPosition: "",
    errText: "",
  });
  const {
    email,
    username,
    password,
    firstname,
    lastname,
    city,
    street,
    number,
    phone,
    errPosition,
    errText,
  } = values;

  // const [validation, setValidation] = useState({
  //   email: "",
  //   username: "",
  //   password: "",
  //   firstname: "",
  //   lastname: "",
  //   city: "",
  //   street: "",
  //   number: "",
  //   phone: "",
  //   invalid: false,
  // });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const errorFound = UserValidator(
      email,
      username,
      password,
      firstname,
      lastname,
      city,
      street,
      number,
      phone,
      setValues
    );
    const reqBody = {
      email: email,
      username: username,
      password: password,
      firstname: firstname,
      lastname: lastname,
      city: city,
      street: street,
      number: number,
      phone: phone,
    };
    if (!errorFound)
      await register(reqBody).then((response) => {
        if (response.status) {
          setSuccess(true);
          console.log(response);
          navigate("/login");
        } else if (response.error) {
          setValues((prev) => ({
            ...prev,
            errPosition: "hasError",
            errText: response.error,
          }));
        }
      });
  };

  return (
    <ThemeProvider theme={BreakPointsTheme}>
      <Grid
        container
        height="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        marginLeft="auto"
        marginRight="auto"
        overflow="auto"
      >
        <p>Register Here</p>
        <Grid item lg={6}>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <input
                type="email"
                className="form-control defaultinput bg6"
                style={{ borderRadius: "5px" }}
                value={email}
                onChange={(e) => setValues(e.target.value)}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>Username</Form.Label>
              <input
                type="name"
                className="form-control defaultinput bg6"
                style={{ borderRadius: "5px" }}
                value={username}
                onChange={(e) => setValues(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                className="form-control defaultinput bg6"
                style={{ borderRadius: "5px" }}
                value={password}
                onChange={(e) => setValues(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-direction-row justify-content-between"
              controlId="formBasicName"
            >
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>First Name</Form.Label>
                <input
                  type="name"
                  className="form-control defaultinput bg6"
                  style={{ borderRadius: "5px" }}
                  value={firstname}
                  onChange={(e) => setValues(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <input
                  type="name"
                  className="form-control defaultinput bg6"
                  style={{ borderRadius: "5px" }}
                  value={lastname}
                  onChange={(e) => setValues(e.target.value)}
                />
              </Form.Group>
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex flex-direction-column"
              controlId="formBasicAddress"
            >
              <Form.Group
                className="mb-3 d-flex flex-direction-column"
                controlId="formBasicFirstName"
              >
                <Form.Label>Address</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3 " controlId="formBasicCity">
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <input
                    type="city"
                    className="form-control defaultinput bg6"
                    style={{ borderRadius: "5px" }}
                    value={city}
                    onChange={(e) => setValues(e.target.value)}
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicStreet">
                <Form.Label>Street</Form.Label>
                <input
                  type="street"
                  className="form-control defaultinput bg6"
                  style={{ borderRadius: "5px" }}
                  value={street}
                  onChange={(e) => setValues(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Number</Form.Label>
                <input
                  type="number"
                  className="form-control defaultinput bg6"
                  style={{ borderRadius: "5px" }}
                  value={number}
                  onChange={(e) => setValues(e.target.value)}
                />
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone</Form.Label>
              <input
                type="phone"
                className="form-control defaultinput bg6"
                style={{ borderRadius: "5px" }}
                value={phone}
                onChange={(e) => setValues(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Grid>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={errPosition === "hasError"}
          autoHideDuration={3000}
          onClose={() =>
            setValues((prev) => ({ ...prev, errPosition: "", errText: "" }))
          }
        >
          <Alert severity="error" variant="filled">
            {errText}
          </Alert>
        </Snackbar>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
