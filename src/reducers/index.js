import { combineReducers } from 'redux'
import brews from './brews'

const brewlogApp = combineReducers({
  brews
})

export default brewlogApp;