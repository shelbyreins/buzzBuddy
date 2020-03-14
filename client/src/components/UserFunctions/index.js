import axios from 'axios'

export const register = newUser => {
  return axios
    .post('/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      age: newUser.age,
      gender: newUser.gender,
      weight: newUser.weight,
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
      // console.log("response.data: " + response.data);
      localStorage.setItem('usertoken', response.data.token);
      localStorage.setItem("userId", response.data.userId);
      return response.data;
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
      userId: drink.userId,
      event: drink.event,
      date: drink.date
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

export const getAllEvents = event => {
  console.log("userId(UserFunctions): " + event.userId);
  return axios
    .get("/getAllEvents/" + event.userId)
    .then(response => {
      // console.log("response from getAllEvents(userFunctions): " + JSON.stringify(response));
      return response.data;
    })
    .catch(err => {
      console.log(err);
    })
}

export const removeEvent = event => {
  return axios
    .get("/removeEvent/" + event.userId + "/" + event.date + "/" + event.event)
    .then(response => {
      console.log("event.userId: ", event.userId);
      console.log("event.date: ", event.date);
      console.log("event.event: ", event.event);
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}