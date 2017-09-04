import React from 'react'

const template = (component) => {
    return (
        <input
            type="text"
            name={component.props.name}
            id={component.props.name}
            type={component.props.type ? component.props.type : 'text'}
            required
            autoComplete="off"
            className="p10-15 bgWhite border borderGrey fs125 widthFull borderBox"
            onChange={(e) => {
                component.props.changeAction(e)
            }} />
    )
}

export default template