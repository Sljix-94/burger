import React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import classes from './SideDrawer.module.css';
import Korpa from '../Navigation/Korpa/Korpa';
import Navigation from '../Navigation/NavigationItems/NavigationItems';

const animationTime = {
	enter: 300,
	exit: 100
}


const sideDrawer = (props)=>{
	return(
		<CSSTransition
			in = {props.show} 
			timeout = {animationTime}
			mountOnEnter
			unmountOnExit
			classNames = {{
				enter: '',
				enterActive: classes.SideDrawerOpen,
				exit: '',
				exitActive: classes.SideDrawerClose
			}}
		>
		<div className = {classes.SideDrawer} >
			<div className = {classes.SideDrawerHeader}>
				<button className = {classes.Exit} onClick = {props.hide}>X</button>
				<h3>Burger king</h3>
				<Korpa/>
			</div>
			<div>
				<Navigation hideHandler = {props.hide}/>
			</div>
		</div>
		</CSSTransition>
	)
}
export default sideDrawer;