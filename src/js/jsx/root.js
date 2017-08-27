import React from 'react'

import Header from '../components/partials/header'
import Views from '../components/views/index'

const template = (component) => {
    return (
        <div>
            <Header />
            <Views />
        </div>
    )
}

export default template