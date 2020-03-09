import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(response => {
      console.log('Registered')
    })
}

export const login = user => {
  return axios
    .post('login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('profile', {
      headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log("********************" + response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const drinks = drink => {
  return axios
    .post("addDrink", {
      quantity: drink.quantity,
      price: drink.price
      // drink: drink.drink,
      // price: drink.price
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    });
}