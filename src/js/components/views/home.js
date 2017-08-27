import React from 'react'
import { connect } from 'react-redux'
import { UPDATE_SUBMISSIONS } from '../../constants/actionTypes'

import AjaxResponse from '../../services/xhr/ajaxResponse'

import logger from '../../services/logger'
import submissionsService from '../../services/submissions'
import template from '../../jsx/views/home'

class Home extends React.Component {
    componentWillMount() {
        submissionsService.getApproved().then(r => {
            const response = new AjaxResponse(r)
            logger.log('Home', response.getResult().data)
            this.props.updateSubmissions(response.getResult().data)
        })
    }

    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    submissions: state.common.submissions
})

const mapDispatchToProps = dispatch => ({
    updateSubmissions: (submissions) => dispatch({
        type: UPDATE_SUBMISSIONS,
        submissions: submissions
    })
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default HomeContainer