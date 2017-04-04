'use strict'

import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

class UserApi {
  constructor (url) {
    this.url = url
  }

  getUsers () {
    return axios.get(`${URL}/users`)
  }
}

export default new UserApi(URL)
