import { APP_LOADED, UPDATE_USER, UPDATE_SUBMISSIONS } from '../constants/actionTypes'

import User from '../models/user'

const defaultUser = new User()
const defaultState = {
    appLoaded: false,
    user: defaultUser,
    submissions: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case APP_LOADED:
            return {
                ...state,
                appLoaded: true
            }

        case UPDATE_USER:
            return {
                ...state,
                user: action.user
            }

        case UPDATE_SUBMISSIONS:
            return {
                ...state,
                submissions: action.submissions
            }

        default: return state
    }
}