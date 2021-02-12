import React from 'react';
import classes from './NavBar.module.css';
import NavItem from './NavBarItem/NavBarItem';

const navBar = (props) =>{
	const burger = <i className="fas fa-hamburger"></i>;
	const slatko = <i className="fas fa-ice-cream"></i>;
	const pice = <i className ="fab fa-gulp"></i>;
	return(
		<div className = {classes.NavBar}>
			<NavItem name = {burger} idprop = 'burger'  offset = {-135} link = '/'/>
			<NavItem name = {slatko} idprop = 'slatko' offset = {-135} link ='/'/>
			<NavItem name = {pice} idprop = 'pice' offset = {-135} link ='/'/>
		</div>
	)
}
	


export default navBar;
