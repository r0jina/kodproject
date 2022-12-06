import { REGISTERAPI } from "./api";

// export const isAuthenticated = () => {
//   if (localStorage.getItem("user")) {
//     return JSON.parse(localStorage.getItem("user"));
//   } else if (
//     localStorage.getItem("user") === "" ||
//     localStorage.getItem("user") === null ||
//     localStorage.getItem("user") === undefined
//   ) {
//     return false;
//   }
// };

// export const authenticate = (data) => {
//   localStorage.setItem("user", JSON.stringify(data));
// };

export const register = (body) => {
  const path = `${REGISTERAPI}`;

  return fetch(path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return err;
    });
};
