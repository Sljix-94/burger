import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = (props)=>{
	return(
		<ul className = {classes.NavigationItems}>
			<NavigationItem exact name = 'Pocetna' link = "/" hide = {props.hideHandler}/>
			<NavigationItem name = 'Jelovnik' link = "/jelovnik" hide = {props.hideHandler}/>
			<NavigationItem name = 'Dostava' link = "/dostava" hide = {props.hideHandler}/>
			<NavigationItem name = 'O nama' link = "/onama" hide = {props.hideHandler}/>
		</ul>
	)
}
export default navigationItems;