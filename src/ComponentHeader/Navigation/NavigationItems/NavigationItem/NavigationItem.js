import React from 'react';
import classes from './NavigationItem.module.css';
import Aux from '../../../../hoc/Auxilary';
import {NavLink} from 'react-router-dom';

const navigationItem = (props)=>(
	<Aux>
		<li className = {classes.NavigationItem}>
			<NavLink
				activeClassName ={classes.active}
				onClick = {props.hide}
				to = {props.link}
				exact = {props.exact}
			>
				{props.name}
			</NavLink>
		</li>
	</Aux>
)
export default navigationItem;