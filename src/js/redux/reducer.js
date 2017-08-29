import { combineReducers } from 'redux'
import admin from '../reducers/admin'
import common from '../reducers/common'
import routes from '../reducers/routes'
import submissions from '../reducers/submissions'

export default combineReducers({
    admin,
    common,
    routes,
    submissions
})