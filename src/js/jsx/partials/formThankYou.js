import React from 'react'

const template = (component) => {
    return (
        <div id="formAnimation" className="relative noOverflow">
            <div className="foldingCube relative clearFix center mt100 mb25">
                <div className="cube cube1 relative left"></div>
                <div className="cube cube2 relative left"></div>
                <div className="cube cube4 relative left"></div>
                <div className="cube cube3 relative left"></div>
            </div>
            <div class="checkmark-circle">
                <div class="background"></div>
                <div class="checkmark draw"></div>
            </div>
            <div className="txtCenter txtDkGrey">
                <h3>Thank you!</h3>
                <p>We will be approving submissions daily.  Please check back soon to find your name!</p>
            </div>
        </div>
    )
}

export default template