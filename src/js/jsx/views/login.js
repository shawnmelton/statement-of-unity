import React from 'react'

import { ROUTES } from '../../constants/routes'

import Button from '../../components/partials/button'
import TextField from '../../components/partials/textField'

const template = (component) => {
    return (
        <div className="mt125 p20-25 txtDkGrey borderBox center">
            <h2 className="mb15">Log In</h2>
            <p className="mb25">Use the form below to sign in to your account.</p>
            <form method="post" action="" className="mb50" onSubmit={(e) => {
                component.onSubmit()
            }}>
                <fieldset>
                    <div className="mb25">
                        <label htmlFor="username" className="block mb5">Username *</label>
                        <TextField name="username" changeAction={(e) => {
                            component.updateUsername(e.target.value)
                        }} />
                    </div>
                    <div className="mb35">
                        <label htmlFor="password" className="block mb5">Password *</label>
                        <TextField type="password" name="password" changeAction={(e) => {
                            component.updatePassword(e.target.value)
                        }} />
                    </div>
                    <Button text="Submit" color="Blue" clickAction={(e) => {
                        component.onSubmit()
                    }} />
                </fieldset>
            </form>
        </div>
    )
}

export default template