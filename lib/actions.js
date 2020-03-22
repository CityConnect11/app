export const SET_MODE = 'SET_MODE'
import { resolveModeByValue } from '../lib/constants'

export function setMode(mode) {
  return { type: SET_MODE, payload: resolveModeByValue(mode).key }
}