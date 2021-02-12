import React from 'react';
import {connect} from 'react-redux';
import classes from './Burgeri.module.css';
import Aux from '../../../hoc/Auxilary';
import Proizvod from '../Proizvod/Proizvod';

const burgeri = (props)=>{
	const burgeriDiv = props.burgers.map((index,cur)=>{
		return(
			<Proizvod
				key = {props.burgers[cur].name}
				src = {props.burgers[cur].img}
				productName = {props.burgers[cur].name}
				productPrice = {props.burgers[cur].price.toFixed(2)}
			/>
		)
	})
	return(
		<Aux>
			<h2 style ={{textAlign: 'center',fontSize: '26px'}}>Burgers</h2>
			<div id = 'burger' className = {classes.BurgeriContent}>
				{burgeriDiv}
			</div>
		</Aux>
	)
}


const mapStateToProps = state =>{
	return{
		burgers: state.proizvodi.burgers
	}
}

export default connect(mapStateToProps)(burgeri);
