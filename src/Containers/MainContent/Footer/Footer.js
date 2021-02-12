import React from 'react';
import classes from './Footer.module.css';
import Logo from '../../../ComponentHeader/Logo/Logo';
import Aux from '../../../hoc/Auxilary';

const footer = (props)=>(
	<Aux>
	<div className = {classes.Footer}>
		<div className = {classes.Logo}>
			<Logo/>
		</div>
		<div className = {classes.Content}>
			<h2 style = {{textAlign: 'center'}}>GDE SE NALAZIMO</h2>
			<p>Dostava: 11 - 03:30h</p>
			<p>(petak i subota do 04:30)</p>
			<p>Lokal: 11 - 04h</p>
			<p>(petak i subota do 05h)</p>
			<p>Bulevar Petra Petrovica</p>
			<p>Vozdovac, Beograd</p>
			<p>(u blizini opstine Vozdovac)</p>	
		</div>
		<div className = {classes.Icons}>
			<a href = '/'><i className="fab fa-facebook-square"></i></a>
			<a href = '/'><i className="fab fa-instagram"></i></a>
		</div>
	</div>
	<div className = {classes.CopyRights}>
		<p>©2020 Sljivancanin Djordje. All rights reserved.</p>
	</div>
	</Aux>
)
export default footer;