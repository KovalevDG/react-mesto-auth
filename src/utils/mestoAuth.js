import { BASE_URL } from "./utils"

const checkResponse = (res) => {
   return res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
}

export const register = (userData) => {
   console.log(JSON.stringify(userData));
   return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      header: {
         "Content-Type": "aplication/json",
      },
      body: JSON.stringify(userData)
   })
      .then(checkResponse);
}

export const authorization = (password, email) => {
   return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      header: {
         "Content-Type": "aplication/json",
      },
      body: JSON.stringify({ password, email }),
   })
      .then(checkResponse)
      .then((data) => {
         if (data.user) {
            localStorage.setItem("jwt", data.jwt);
            return data;
         } else {
            return;
         }
      })
      .catch((error) => console.log(error));
}

export const getContent = (token) => {
   return fetch(`${BASE_URL}user/me`, {
      method: "GET",
      header: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   })
      .then((res) => res.json())
      .then((data) => data);
}