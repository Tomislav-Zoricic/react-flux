import Dispatcher from './../dispatcher/appDispatcher'
import { EventEmitter } from 'events'
import actionTypes from './../constants/actionTypes'
import sample from 'lodash/sample'

const CHANGE_EVENT = 'change'
let _posts = []

class PostStore extends EventEmitter {
  // Add change listener
  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback)
  }
  // Remove change listener
  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
  // Emit change
  emitChange () {
    this.emit(CHANGE_EVENT)
  }
  // Other methods to access stores data.
  getPosts () {
    return _posts
  }

  getUserPosts (userId) {
    userId = parseInt(userId, 10)
    return _posts.filter(post => post.userId === userId)
  }

  getRandomUserPost (userId) {
    return sample(this.getUserPosts(userId))
  }
}

const postStore = new PostStore()

// Register to dispatcher.
Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.GET_POSTS:
      _posts = (action.posts.data)
      // Important to call every time the store changes, to notify views about the change
      postStore.emitChange()
  }
})

export default postStore
