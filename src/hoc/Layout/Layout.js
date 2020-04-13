import React, { Component } from "react";
import { connect } from "react-redux";

import Auxiliary from "../Auxiliary/Auxiliary";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: true,
  };

  sideDrawerClosedHandeler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxiliary>
        <div>
          <Toolbar
            isAuth={this.props.isAuthenicated}
            drawerToggleClicked={this.sideDrawerToggleHandler}
          />
          <SideDrawer
            isAuth={this.props.isAuthenicated}
            open={this.state.showSideDrawer}
            closed={this.sideDrawerClosedHandeler}
          />
        </div>
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenicated: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
