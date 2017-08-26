import React from 'react'

import Home from '../../components/views/home'

import { ROUTES } from '../../constants/routes'

const template = (component) => {
    return (
        <div>
            { component.props.currentRoute === ROUTES.HOME ? <Home /> : '' }
            { component.props.currentRoute === ROUTES.THANK_YOU ? <div>Thank You</div> : '' }
        </div>
    )
}

export default template