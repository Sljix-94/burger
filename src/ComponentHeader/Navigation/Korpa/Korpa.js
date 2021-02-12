import React from 'react';
import classes from './Korpa.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

const korpa = (props)=>(
	
	<NavLink
		className ={classes.divKorpa}
		to = '/korpa'
	>
		<div className = {classes.Korpa}>
			<span>
				{props.orders.length}
			</span>
		</div>
		<span style ={{color: ' #e95110'}}><i className="fas fa-shopping-basket"></i></span>
	</NavLink>
)

const mapStateToProps = state => {
	return{
		orders: state.proizvodi.listaProizvoda
	}
}

export default connect(mapStateToProps)(korpa);