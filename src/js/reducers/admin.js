import { UPDATE_ADMIN } from '../constants/actionTypes'

import adminService from '../services/admin'

const defaultState = {
    loggedIn: adminService.getLoggedIn()
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