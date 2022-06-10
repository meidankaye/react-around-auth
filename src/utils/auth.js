export const BASE_URL = "https://register.nomoreparties.co";

export const register = (user) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => console.log(err));
};

export const authorize = (user) => {
  console.log(user);
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: user.email, password: user.password }),
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return e;
      }
    })
    .catch((err) => console.log(err));
};

export const validateToken = (token) => {
  if (token) {
    return fetch(`${BASE_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        try {
          if (response.status === 200) {
            return response.json();
          }
        } catch (e) {
          return e;
        }
      })
      .catch((err) => console.log(err));
  }
}
