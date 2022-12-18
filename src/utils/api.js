class Api {
   constructor(options) {
      this._baseUrl = options.baseUrl;
      this._headers = options.headers;
   }

   postCards(card) {
      return this._request(`${this._baseUrl}cards`, {
         method: 'POST',
         body: JSON.stringify(card),
         headers: this._headers
      });
   }

   changeLikeCardStatus(card, isLiked) {
      if (!isLiked) {
         return this.removeLikeCard(card);
      } else {
         return this.putLikeCard(card);
      }
   }

   putLikeCard(card) {
      return this._request(`${this._baseUrl}cards/${card._id}/likes`, {
         method: 'PUT',
         headers: this._headers
      });
   }

   removeLikeCard(card) {
      return this._request(`${this._baseUrl}cards/${card._id}/likes`, {
         method: 'DELETE',
         body: JSON.stringify(card),
         headers: this._headers
      });
   }

   editUserInfo(data) {
      return this._request(`${this._baseUrl}users/me`, {
         method: 'PATCH',
         headers: this._headers,
         body: JSON.stringify(data)
      });
   }

   editUserAvatar(data) {
      return this._request(`${this._baseUrl}users/me/avatar`, {
         method: 'PATCH',
         headers: this._headers,
         body: JSON.stringify(data)
      });
   }

   deleteCard(card) {
      return this._request(`${this._baseUrl}cards/${card._id}`, {
         method: 'DELETE',
         headers: this._headers
      });
   }

   getUserInfo() {
      return this._request(`${this._baseUrl}users/me`, { headers: this._headers });
   }

   getInitialCards() {
      return this._request(`${this._baseUrl}cards`, { headers: this._headers });
   }

   _checkResponse(res) {
      if (res.ok) {
         return res.json();
      }else{
         return Promise.reject(`Ошибка: ${res.status}`);  
      }
   }

   _request(url, options) {
      return fetch(url, options).then(this._checkResponse);
    }
}

export const api = new Api({
   baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-52/',
   headers: {
       authorization: '7c3683ec-8b7d-4bcf-ad22-d226ef2effb7',
       'Content-Type': 'application/json'
    }
});