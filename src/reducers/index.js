import * as actionTypes from '../actions/types'
import { combineReducers } from 'redux'

// 最初的 用户 state
const initialUserState = {
  currentUser : null,
  isLoading: true
}

const user_reducer = (state = initialUserState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        currentUser: action.playload.currentUser,
        isLoading : false
      }
    case actionTypes.CLEAR_USER:
      return {
        ...initialUserState,
        isloading: false
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  user: user_reducer
})

export default rootReducer