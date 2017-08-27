import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/partials/button'

class Header extends React.Component {
    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderContainer