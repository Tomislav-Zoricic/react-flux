'use strict'

import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com'

class PostApi {
  constructor (url) {
    this.url = url
  }

  getPosts () {
    return axios.get(`${URL}/posts`)
  }
}

export default new PostApi(URL)
