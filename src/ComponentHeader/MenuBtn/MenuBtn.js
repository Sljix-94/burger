import React from 'react';
import classes from './MenuBtn.module.css';

const menuBtn = (props)=>(
	<div onClick = {props.show} className = {classes.DrawerToggle}>
		<div></div>
		<div></div>
		<div></div>
	</div>
)
export default menuBtn;