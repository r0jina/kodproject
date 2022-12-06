import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Grid, ThemeProvider } from "@mui/material";
import { BreakPointsTheme } from "../Components/BreakPointsTheme";
import { useState } from "react";
import { authenticate, isAuthenticated, register } from "../common";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
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
    if (
      email !== "" ||
      password !== "" ||
      firstname !== "" ||
      lastname !== "" ||
      city !== "" ||
      street !== "" ||
      number !== "" ||
      phone !== ""
    )
      await register(reqBody).then((response) => {
        // authenticate(response.body);
        if (response.status) {
          setSuccess(true);
        }
        console.log(response);
        navigate("/login");
      });
  };

  // useEffect(() => {
  //   if (isAuthenticated()) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <ThemeProvider theme={BreakPointsTheme}>
      <Grid
        container
        width="100vw"
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
                // onChange={(e) =>
                //   setEmail((prev) => ({
                //     ...prev,
                //     email: e.target.value,
                //   }))
                // }
                onChange={(e) => setEmail(e.target.value)}
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
                // onChange={(e) =>
                //   setUsername((prev) => ({
                //     ...prev,
                //     username: e.target.value,
                //   }))
                // }
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <input
                type="password"
                className="form-control defaultinput bg6"
                style={{ borderRadius: "5px" }}
                value={password}
                // onChange={(e) =>
                //   setPassword((prev) => ({
                //     ...prev,
                //     password: e.target.value,
                //   }))
                // }
                onChange={(e) => setPassword(e.target.value)}
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
                  //   onChange={(e) =>
                  //     setFirstname((prev) => ({
                  //       ...prev,
                  //       firstname: e.target.value,
                  //     }))
                  //   }
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <input
                  type="name"
                  className="form-control defaultinput bg6"
                  style={{ borderRadius: "5px" }}
                  value={lastname}
                  //   onChange={(e) =>
                  //     setLastname((prev) => ({
                  //       ...prev,
                  //       lastname: e.target.value,
                  //     }))
                  //   }
                  onChange={(e) => setLastname(e.target.value)}
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
                    // onChange={(e) =>
                    //   setCity((prev) => ({
                    //     ...prev,
                    //     city: e.target.value,
                    //   }))
                    // }
                    onChange={(e) => setCity(e.target.value)}
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
                  //   onChange={(e) =>
                  //     setStreet((prev) => ({
                  //       ...prev,
                  //       street: e.target.value,
                  //     }))
                  //   }
                  onChange={(e) => setStreet(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label>Number</Form.Label>
                <input
                  type="number"
                  className="form-control defaultinput bg6"
                  style={{ borderRadius: "5px" }}
                  value={number}
                  //   onChange={(e) =>
                  //     setNumber((prev) => ({
                  //       ...prev,
                  //       number: e.target.value,
                  //     }))
                  //   }
                  onChange={(e) => setNumber(e.target.value)}
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
                // onChange={(e) =>
                //   setPhone((prev) => ({
                //     ...prev,
                //     phone: e.target.value,
                //   }))
                // }
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Register;
