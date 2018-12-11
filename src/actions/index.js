import * as actionTypes from './types'

export const setUser = user => {
  return {
    type: actionTypes.SET_USER,
    playload: {
      currentUser: user
    }
  }
}