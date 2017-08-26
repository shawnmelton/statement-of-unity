import React from 'react'
import { connect } from 'react-redux'
import { APP_LOADED } from '../constants/actionTypes'

import logger from '../services/logger'
import template from '../jsx/root'

export class Root extends React.Component {
    componentDidMount() {
        logger.setOutput(true)
        logger.log('Root', 'App has been loaded.')
        this.props.onLoad()
    }

    render() {
        return template(this);
    }
}

const mapStateToProps = state => ({
    appLoaded: state.common.appLoaded
})

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch({
        type: APP_LOADED
    })
})

const RootContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Root)

export default RootContainer