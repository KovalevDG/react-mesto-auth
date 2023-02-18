import { BASE_URL } from "./utils"

const checkResponse = (res) => {
   return res.ok ? res.json : Promise.reject(`Error: ${res.status}`);
}

export const register = (userData) => {
   return fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify(userData)
   })
      .then(checkResponse);
}

export const authorization = ({ password, email }) => {
   return fetch(`${BASE_URL}/signin`, {
      method: "POST",
      headers: {
         "Accept": "application/json",
         "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
   })
      .then(checkResponse);
}

export const getContent = (token) => {
   return fetch(`${BASE_URL}user/me`, {
      method: "GET",
      header: {
         "Content-Type": "application/json",
         "Authorization": `Bearer ${token}`,
      },
   })
      .then(checkResponse);
}