import React from 'react';
import classes from './NavBarItem.module.css';
import {Link} from 'react-scroll';

const navBarItem = (props) =>(
	<div className = {classes.NavItem}>
		<Link
    		activeClass={classes.Active}
    		to={props.idprop}
    		spy={true}
    		smooth={true}
    		offset={props.offset}
    		duration={500}
		>
			{props.name}
		</Link>
	</div>
	
)

export default navBarItem;