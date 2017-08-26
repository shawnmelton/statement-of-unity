import React from 'react'
import { connect } from 'react-redux'

import template from '../../jsx/views/home'

class Home extends React.Component {
    render() {
        return template(this)
    }
}

const mapStateToProps = state => ({
    
})

const mapDispatchToProps = dispatch => ({
    
})

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

export default HomeContainer