import React from 'react'

import Home from '../../components/views/home'
import Login from '../../components/views/login'
import Submissions from '../../components/views/submissions'

import { ROUTES } from '../../constants/routes'

const template = (component) => {
    return (
        <div>
            { component.props.currentRoute === ROUTES.HOME ? <Home /> : '' }
            { component.props.currentRoute === ROUTES.SUBMISSIONS ? <Submissions /> : '' }
            { component.props.currentRoute === ROUTES.LOGIN ? <Login /> : '' }
        </div>
    )
}

export default template