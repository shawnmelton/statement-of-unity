import React from 'react'

const template = (component) => {
    return (
        <div id="formAnimation" className="relative noOverflow">
            {
                component.props.formSubmitting ?
                    <div>
                        <div className="foldingCube relative clearFix center mt75 mb25">
                            <div className="cube cube1 relative left"></div>
                            <div className="cube cube2 relative left"></div>
                            <div className="cube cube4 relative left"></div>
                            <div className="cube cube3 relative left"></div>
                        </div>
                        <h3 className="txtCenter txtDkGrey">Submitting Your Name ...</h3>
                    </div>
                    :
                    <div>
                        <svg className="checkmark mb25 mt50 center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        <div className="txtCenter txtDkGrey center maxWidth600">
                            <h3 className="txtGreen">Thank You!</h3>
                            <p>We will be approving submissions daily, so please check back soon to find your name added to our list.</p>
                        </div>
                    </div>
            }
        </div>
    )
}

export default template