import React from 'react'
import { connect } from 'react-redux'

import { ROUTES, ROUTE_CHANGE } from '../../constants/routes'
import { UPDATE_ADMIN } from '../../constants/actionTypes'

import AjaxResponse from '../../services/xhr/ajaxResponse'

import adminService from '../../services/admin'
import authService from '../../services/auth'
import browser from '../../services/browser'
import logger from '../../services/logger'
import notEmptyValidator from '../../services/validators/notEmpty'
import template from '../../jsx/views/login'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.formUsername = ''
        this.formPassword = ''
    }

    onSubmit() {
        logger.log('Login', 'Form successfully submitted.  Preparing to validate.')
        if (this.validated()) {
            logger.log('Login', 'Form submission passed validation.')
            logger.log('Login', this.formUsername + ' - '+ this.formPassword)

            authService.send({
                username: this.formUsername,
                password: this.formPassword
            }).then(r => {
                const response = new AjaxResponse(r)
                logger.log('Login', response.getResult())
                if (response.getResult().data.result === true) {
                    adminService.logIn()
                    this.props.updateAdmin(true)
                    browser.navigate('/submissions')
                    this.props.route(ROUTES.SUBMISSIONS)
                }
            })
        } else {
            logger.log('Login', 'Form submission failed validation.')
        }
    }

    render() {
        return template(this)
    }

    updatePassword(password) {
        this.formPassword = password
    }

    updateUsername(username) {
        this.formUsername = username
    }

    validated() {
        return notEmptyValidator.run(this.formUsername) &&
            notEmptyValidator.run(this.formPassword)
    }
}

const mapStateToProps = state => ({
    loggedIn: state.admin.loggedIn
})

const mapDispatchToProps = dispatch => ({
    route: (route) => dispatch({
        type: ROUTE_CHANGE,
        route: route
    }),
    updateAdmin: (loggedIn) => dispatch({
        type: UPDATE_ADMIN,
        loggedIn: loggedIn
    })
})

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

export default LoginContainer