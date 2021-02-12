import React from 'react';
import classes from './Jelovnik.module.css';
import Aux from '../../hoc/Auxilary';
import Burgeri from '../MainContent/Burgeri/Burgeri';
import Slatko from '../MainContent/Slatko/Slatko';
import Pice from '../MainContent/Pice/Pice';
import NavBar from '../MainContent/NavBar/NavBar';
import {Link} from 'react-scroll';

const jelovnik = (props)=>{
	return(
		<Aux>
		<NavBar/>
		<div className = {classes.Container} id = 'pocetna'>
		<div className = {classes.Burger}>
			<Burgeri/>
		</div>
		<div className = {classes.Slatko}>
			<Slatko/>
		</div>
		<div className = {classes.Pice}>
			<Pice/>
		</div>
		</div>
		<Link
					activeClass={classes.Link}
    				to= 'pocetna'
    				spy={true}
    				smooth={true}
    				offset={-130}
    				duration={500}
		>
				<i className ="fas fa-arrow-circle-up"></i>
		</Link>
		</Aux>
	)
}
export default jelovnik;