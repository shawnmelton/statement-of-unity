import { UPDATE_ADMIN } from '../constants/actionTypes'

const defaultState = {
    loggedIn: false
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_ADMIN:
            return {
                ...state,
                loggedIn: action.loggedIn
            }

        default: return state
    }
}