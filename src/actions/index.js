// 用返 types 檔入面定的
import * as actionTypes from './types'

//
export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    playload: {
      currentUser: user
    }
  }
}

export const clearUser = () => {
  return {
    type: actionTypes.CLEAR_USER
  }
}