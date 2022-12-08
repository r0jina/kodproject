export const UserValidator = (
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
) => {
  if (email === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid email",
    }));
    return true;
  } else if (username === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid username",
    }));
    return true;
  } else if (password === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid password",
    }));
    return true;
  } else if (firstname === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid firstname",
    }));
    return true;
  } else if (lastname === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid lastname",
    }));
    return true;
  } else if (city === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid city",
    }));
    return true;
  } else if (street === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid street",
    }));
    return true;
  } else if (number === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid password",
    }));
    return true;
  } else if (phone === "" || undefined || null) {
    setValues((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid phone",
    }));
    return true;
  }
  return false;
};

export const LoginValidator = (
  username,
  password,
  setUsername,
  setPassword
) => {
  if (username === "" || undefined || null) {
    setUsername((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid email",
      loading: false,
    }));
    return true;
  } else if (password === "" || undefined || null) {
    setPassword((prev) => ({
      ...prev,
      errPosition: "hasError",
      errText: "Invalid password",
      loading: false,
    }));
    return true;
  }
  return false;
};
