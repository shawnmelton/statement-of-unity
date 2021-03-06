import React from 'react'
import { connect } from 'react-redux'

import { UPDATE_USER, UPDATE_APPROVED_SUBMISSIONS, UPDATE_SUBMISSION_FORM_STATUS } from '../../constants/actionTypes'

import AjaxResponse from '../../services/xhr/ajaxResponse'
import User from '../../models/user'

import alphaFirstCharacterValidator from '../../services/validators/alphaFirstCharacter'
import emailAddressValidator from '../../services/validators/emailAddress'
import logger from '../../services/logger'
import notEmptyValidator from '../../services/validators/notEmpty'
import submissionService from '../../services/submission'
import submissionsService from '../../services/submissions'
import template from '../../jsx/partials/submissionForm'

class SubmissionForm extends React.Component {
    constructor(props) {
        super(props)

        this.formUser = new User()
    }

    onSubmit() {
        logger.log('SubmissionForm', 'Form successfully submitted.  Preparing to validate.')
        if (this.validated()) {
            logger.log('SubmissionForm', 'Form submission passed validation.')
            logger.log('SubmissionForm', this.formUser)

            this.props.updateFormStatus({
                submitting: true,
                submitted: false,
                errors: false
            })
            this.props.updateUser(this.formUser)

            submissionService.add({
                firstName: this.formUser.firstName,
                lastName: this.formUser.lastName,
                church: this.formUser.church,
                emailAddress: this.formUser.emailAddress
            }).then(r => {
                const response = new AjaxResponse(r)
                logger.log('SubmissionService', response.getResult())
                this.updateSubmissions()
            })
        } else {
            logger.log('SubmissionForm', 'Form submission failed validation.')
            this.props.updateFormStatus({
                submitting: false,
                submitted: false,
                errors: true
            })
        }
    }

    render() {
        return template(this)
    }

    updateChurch(church) {
        this.formUser.setChurch(church)
    }

    updateEmailAddress(email) {
        this.formUser.setEmailAddress(email)
    }

    updateFirstName(firstName) {
        this.formUser.setFirstName(firstName)
    }

    updateLastName(lastName) {
        this.formUser.setLastName(lastName)
    }

    updateSubmissions() {
        submissionsService.getApproved().then(r => {
            const response = new AjaxResponse(r)
            logger.log('SubmissionForm', response.getResult().data)
            this.props.updateSubmissions(response.getResult().data)

            this.props.updateFormStatus({
                submitting: false,
                submitted: true,
                errors: false
            })
        })
    }

    validated() {
        return alphaFirstCharacterValidator.run(this.formUser.firstName) &&
            alphaFirstCharacterValidator.run(this.formUser.lastName) &&
            notEmptyValidator.run(this.formUser.church) &&
            emailAddressValidator.run(this.formUser.emailAddress)
    }
}

const mapStateToProps = state => ({
    user: state.common.user,
    formErrors: state.submissions.errors
})

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch({
        type: UPDATE_USER,
        user: user
    }),
    updateFormStatus: (status) => dispatch({
        type: UPDATE_SUBMISSION_FORM_STATUS,
        submitting: status.submitting,
        submitted: status.submitted,
        errors: status.errors
    }),
    updateSubmissions: (submissions) => dispatch({
        type: UPDATE_APPROVED_SUBMISSIONS,
        submissions: submissions
    })
})

const SubmissionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmissionForm)

export default SubmissionFormContainer