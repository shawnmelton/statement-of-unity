import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/views/index'
import browser from '../../services/browser'

import { ROUTE_CHANGE, ROUTES } from '../../constants/routes'

class Views extends React.Component {
    componentDidMount() {
        const route = browser.getRoute()
        if (route !== ROUTES.HOME) {
            this.props.route(route)
        }
    }

    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    currentRoute: state.routes.currentRoute
})

const mapDispatchToProps = dispatch => ({
    route: (route) => dispatch({
        type: ROUTE_CHANGE,
        route: route
    })
})

const ViewsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Views)

export default ViewsContainer