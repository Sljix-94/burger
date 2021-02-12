import React from 'react';
import classes from './Toolbar.module.css';
import MenuBtn from '../MenuBtn/MenuBtn';
import Logo from '../Logo/Logo';
import Korpa from '../Navigation/Korpa/Korpa';
import Navigation from '../Navigation/NavigationItems/NavigationItems';

const toolbar = (props)=>{
	return(
		<header className = {classes.Toolbar}>
			<MenuBtn show = {props.show}/>
			<div className = {classes.Logo}>
				<Logo/>
			</div>
			<div className = {classes.DesktopOnly}>
				<Navigation />
			</div>
			<Korpa/>
		</header>
	)
}
export default toolbar;