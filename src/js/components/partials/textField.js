import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/partials/textField'

class TextField extends React.Component {
    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

const TextFieldContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextField)

export default TextFieldContainer