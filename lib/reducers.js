import { combineReducers } from 'redux'
import { MODE_PRIVATE } from './constants'
import { SET_MODE } from './actions'

const initialState = {
  mode: MODE_PRIVATE.key
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE: {
      return {
        ...state,
        mode: action.payload,
      }
    }    
    default:
      return state
  }
}


export default combineReducers({
  settings
})