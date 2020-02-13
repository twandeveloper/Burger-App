import React, { Component } from 'react'

import Auxiliary from '../../hoc/Auxiliary'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandeler = () => {
        this.setState({showSideDrawer: false})
    }


    render () {
        return (
            <Auxiliary>
            <div>
                <Toolbar/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandeler}/>
            </div>
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Auxiliary>
        )
    }
}
 

export default Layout