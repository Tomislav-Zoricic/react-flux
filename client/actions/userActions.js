'use strict'

import Dispatcher from './../dispatcher/appDispatcher'
import userApi from './../api/userApi'
import actionTypes from './../constants/actionTypes'

class UserActions {
  getUsers () {
    userApi.getUsers().then(users => {
      Dispatcher.dispatch({
        actionType: actionTypes.GET_USERS,
        users
      })
    })
  }
}

export default new UserActions()
