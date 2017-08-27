import React from 'react'

const template = (component) => {
    const cssClasses = `block cursor txt${component.props.color} border border${component.props.color} borderRadius3 borderBox p0-15
        txtNoUnderline bgWhite height40 button${component.props.color} txtUpperCase center txtCenter`.replace(/\n|\t|\r/g, '');

    return (
        <a className={cssClasses} href={ component.props.href ? component.props.href : 'javascript:void(0)' } onClick={(e) => {
            if (component.props.clickAction) {
                e.preventDefault()
                component.props.clickAction(e)
            }
        }}>
            {component.props.text}
        </a>
    )
}

export default template