import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.css";

const navigationItems = (props) => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      Burger Builder
    </NavigationItem>

    {props.isAuthenicated ? (
      <NavigationItem link="/orders">Orders</NavigationItem>
    ) : null}

    {props.isAuthenicated ? (
      <NavigationItem link="/logout">Logout</NavigationItem>
    ) : (
      <NavigationItem link="/auth">Authenicate</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
