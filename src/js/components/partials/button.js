import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/partials/button'

class Button extends React.Component {
    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

const ButtonContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)

export default ButtonContainer