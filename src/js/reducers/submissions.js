import { UPDATE_APPROVED_SUBMISSIONS, UPDATE_UNAPPROVED_SUBMISSIONS, UPDATE_SUBMISSION_FORM_STATUS } from '../constants/actionTypes'

const defaultState = {
    approved: [],
    submitting: false,
    submitted: false,
    errors: false,
    unapproved: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case UPDATE_APPROVED_SUBMISSIONS:
            return {
                ...state,
                approved: action.submissions
            }

        case UPDATE_UNAPPROVED_SUBMISSIONS:
            return {
                ...state,
                unapproved: action.submissions
            }

        case UPDATE_SUBMISSION_FORM_STATUS:
            return {
                ...state,
                submitting: action.submitting,
                submitted: action.submitted,
                errors: action.errors
            }

        default: return state
    }
}