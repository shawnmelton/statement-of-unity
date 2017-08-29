import React from 'react'

import Button from '../../components/partials/button'
import { ROUTES } from '../../constants/routes'

const template = (component) => {
    return (
        <header className="bgWhite fixed top0 left0 right0 boxShadowBottom">
            <h1 className="borderBox p20-25 txtDkGrey maxWidth1000 center relative fs100">
                <strong className="block txtBlack lineHeight14 txtUpperCase fs110 mb5">From Hampton Roads Pastors and Ministry Leaders</strong>
                <span className="fs100">A Statement of Unity</span>
                { component.props.currentRoute === ROUTES.HOME ? <Button text="Join" color="Green" href="#form" /> : '' }
            </h1>
        </header>
    )
}

export default template