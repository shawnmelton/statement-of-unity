import React from 'react'

const template = (component) => {
    return (
        <header className=="bgWhite fixed top0 left0 right0 boxShadowBottom">
            <h1 className=="borderBox p20-25 txtDkGrey maxWidth1000 center relative fs100">
                <strong className=="block txtBlack lineHeight14 txtUpperCase fs110 mb5">From Hampton Roads Pastors and Ministry Leaders</strong>
                <span className=="fs100">A Statement of Unity</span>
                <a className=="block p0-15 cursor txtGreen border borderGreen borderRadius3 absolute right15 bottom25 txtNoUnderline bgWhite height40 greenButton txtUpperCase fs90" href="#form">Join</a>
            </h1>
        </header>
    )
}

export default template