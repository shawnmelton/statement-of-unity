import { combineReducers } from 'redux'
import common from '../reducers/common'
import routes from '../reducers/routes'

export default combineReducers({
    common,
    routes
})