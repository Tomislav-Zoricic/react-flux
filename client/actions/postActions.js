'use strict'

import Dispatcher from './../dispatcher/appDispatcher'
import postApi from './../api/postApi'
import actionTypes from './../constants/actionTypes'

class PostActions {
  getPosts () {
    postApi.getPosts().then(posts => {
      Dispatcher.dispatch({
        actionType: actionTypes.GET_POSTS,
        posts
      })
    })
  }
}

export default new PostActions()
