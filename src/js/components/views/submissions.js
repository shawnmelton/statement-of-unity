import React from 'react'
import { connect } from 'react-redux'

import { ROUTES, ROUTE_CHANGE } from '../../constants/routes'
import { UPDATE_UNAPPROVED_SUBMISSIONS } from '../../constants/actionTypes'

import AjaxResponse from '../../services/xhr/ajaxResponse'

import logger from '../../services/logger'
import submissionService from '../../services/submission'
import submissionsService from '../../services/submissions'
import template from '../../jsx/views/submissions'

class Submissions extends React.Component {
    approveSubmission(submission) {
        submission.approved = 1
        this.updateSubmission(submission)
    }

    componentWillMount() {
        if (this.props.loggedIn === false) {
            this.props.route(ROUTES.LOGIN)
        }

        this.updateSubmissions()
    }

    rejectSubmission(submission) {
        submission.rejected = 1
        this.updateSubmission(submission)
    }

    render() {
        return template(this)
    }

    updateSubmission(submission) {
        submissionService.update(submission.id, {
            id: submission.id,
            approved: submission.approved,
            rejected: submission.rejected
        }).then(r => {
            const response = new AjaxResponse(r)
            logger.log('SubmissionService', response.getResult())
            this.updateSubmissions()
        })
    }

    updateSubmissions() {
        submissionsService.getUnapproved().then(r => {
            const response = new AjaxResponse(r)
            logger.log('Submissions', response.getResult().data)
            this.props.updateSubmissions(response.getResult().data)
        })
    }
}

const mapStateToProps = state => ({
    currentRoute: state.common.currentRoute,
    loggedIn: state.admin.loggedIn,
    unapprovedSubmissions: state.submissions.unapproved
})

const mapDispatchToProps = dispatch => ({
    route: (route) => dispatch({
        type: ROUTE_CHANGE,
        route: route
    }),
    updateSubmissions: (submissions) => dispatch({
        type: UPDATE_UNAPPROVED_SUBMISSIONS,
        submissions: submissions
    })
})

const SubmissionsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Submissions)

export default SubmissionsContainer