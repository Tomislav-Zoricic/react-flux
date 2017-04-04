'use strict'

import Dispatcher from './../dispatcher/appDispatcher'
import actionTypes from './../constants/actionTypes'
import { EventEmitter } from 'events'
import find from 'lodash/find'
import shuffle from 'lodash/shuffle'

const CHANGE_EVENT = 'change'
// Total number of users in api used.
let _users = []

class UserStore extends EventEmitter {
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  }

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }

  emitChange () {
    this.emit(CHANGE_EVENT)
  }

  getUsers () {
    return _users
  }

  getUserById (id) {
    return find(_users, { 'id': parseInt(id, 10) })
  }

  getSimilarUsers (id) {
    // NOTE For now, just throw 4 at random.
    // NOTE Like there will be any other time.
    let shuffledUsers = shuffle(_users)
    return shuffledUsers.slice(0, 4)
  }
}

const userStore = new UserStore()

// Every store that register with the dispatcher gets notified of every single action.
// Differs from pub-sub
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.GET_USERS:
      _users = (action.users.data)
      // Important to call every time the store changes, to notify views about the change
      userStore.emitChange()
  }
})

export default userStore
