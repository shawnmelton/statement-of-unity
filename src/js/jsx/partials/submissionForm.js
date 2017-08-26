import React from 'react'

import Button from '../../components/partials/button'
import TextField from '../../components/partials/textField'

const template = (component) => {
    return (
        <form method="post" action="" className="mb50" onSubmit={(e) => {
            component.onSubmit()
        }}>
            <fieldset className="clearFix">
                <div className="left mb25 width45p mr10p">
                    <label htmlFor="firstName" className="block mb5">First Name *</label>
                    <TextField name="firstName" changeAction={(e) => {
                        component.updateFirstName(e.target.value)
                    }} />
                </div>
                <div className="left mb25 width45p">
                    <label htmlFor="lastName" className="block mb5">Last Name *</label>
                    <TextField name="lastName" changeAction={(e) => {
                        component.updateLastName(e.target.value)
                    }} />
                </div>
            </fieldset>
            <fieldset>
                <div className="mb25">
                    <label htmlFor="church" className="block mb5">Church or Organization *</label>
                    <TextField name="church" changeAction={(e) => {
                        component.updateChurch(e.target.value)
                    }} />
                </div>
                <div className="mb35">
                    <label htmlFor="emailAddress" className="block mb5">Email Address *</label>
                    <TextField name="emailAddress" changeAction={(e) => {
                        component.updateEmailAddress(e.target.value)
                    }} />
                </div>
                <Button text="Submit" color="Blue" clickAction={(e) => {
                    component.onSubmit()
                }} />
            </fieldset>
        </form>
    )
}

export default template