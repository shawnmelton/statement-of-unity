import { ROUTES, ROUTE_CHANGE, ROUTE_INITIAL } from '../constants/routes'

const defaultState = {
    currentRoute: ROUTES.HOME
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ROUTE_CHANGE:
            return {
                ...state,
                currentRoute: action.route
            }

        case ROUTE_INITIAL:
            return {
                ...state,
                currentRoute: ROUTES.HOME
            }

        default: return state;
    }
}