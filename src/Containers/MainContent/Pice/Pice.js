import React from 'react';
import classes from './Pice.module.css';
import Aux from '../../../hoc/Auxilary';
import Proizvod from '../Proizvod/Proizvod';
import {connect} from 'react-redux';

const pice = (props)=>{
	const piceDiv = props.pice.map((index,cur)=>{
		return(
			<Proizvod
				key = {props.pice[cur].name}
				src = {props.pice[cur].img}
				productName = {props.pice[cur].name}
				productPrice = {props.pice[cur].price.toFixed(2)}
			/>
		)
	})
	return(
		<Aux>
			<h2 style ={{textAlign: 'center',fontSize: '26px'}}>Pice</h2>
			<div id = 'pice' className = {classes.PiceContent}>
				{piceDiv}
			</div>
		</Aux>
	)
}
const mapStateToProps = state =>{
	return{
		pice: state.proizvodi.pice
	}
}
export default connect(mapStateToProps)(pice);