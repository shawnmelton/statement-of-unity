import React from 'react'
import { connect } from 'react-redux'

import { UPDATE_USER } from '../../constants/actionTypes'

import User from '../../models/user'

import alphaFirstCharacterValidator from '../../services/validators/alphaFirstCharacter'
import emailAddressValidator from '../../services/validators/emailAddress'
import logger from '../../services/logger'
import notEmptyValidator from '../../services/validators/notEmpty'
import submissionService from '../../services/submission'
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
            this.props.updateUser(this.formUser)

            submissionService.send({
                firstName: this.props.user.firstName,
                lastName: this.props.user.lastName,
                church: this.props.user.church,
                emailAddress: this.props.user.emailAddress
            })

            setTimeout(() => {
                console.log(this.props.user)
            }, 2000)
        } else {
            logger.log('SubmissionForm', 'Form submission failed validation.')
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

    validated() {
        return alphaFirstCharacterValidator.run(this.formUser.firstName) &&
            alphaFirstCharacterValidator.run(this.formUser.lastName) &&
            notEmptyValidator.run(this.formUser.church) &&
            emailAddressValidator.run(this.formUser.emailAddress)
    }
}

const mapStateToProps = state => ({
    user: state.common.user
})

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch({
        type: UPDATE_USER,
        user: user
    })
})

const SubmissionFormContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmissionForm)

export default SubmissionFormContainer