import { APP_LOADED, UPDATE_USER } from '../constants/actionTypes'

import User from '../models/user'

const defaultUser = new User()
const defaultState = {
    appLoaded: false,
    user: defaultUser
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

        default: return state
    }
}