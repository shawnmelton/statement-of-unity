import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/partials/formAnimation'

class FormAnimation extends React.Component {
    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    formSubmitting: state.submissions.submitting,
    formSubmitted: state.submissions.submited
})

const mapDispatchToProps = dispatch => ({
    
})

const FormAnimationContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(FormAnimation)

export default FormAnimationContainer