import React from 'react'
import { NavLink } from "react-router-dom";

import classses from './NavigationItem.css'

const navigationItem = (props) =>(
    <li className={classses.NavigationItem}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classses.active}>{props.children}</NavLink>
    </li>
);


export default navigationItem