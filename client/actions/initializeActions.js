'use strict'

import userActions from './userActions'
import postActions from './postActions'

const InitializeActions = {
  initApp () {
    userActions.getUsers()
    postActions.getPosts()
  }
}

export default InitializeActions
