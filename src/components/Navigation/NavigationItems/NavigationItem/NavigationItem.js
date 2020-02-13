import React from 'react'

import classses from './NavigationItem.css'

const navigationItem = (props) =>(
    <li className={classses.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classses.active : null}>{props.children}</a>
    </li>
);


export default navigationItem