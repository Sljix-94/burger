import React from 'react';
import classes from './Slatko.module.css';
import Aux from '../../../hoc/Auxilary';
import {connect} from 'react-redux';
import Proizvod from  '../Proizvod/Proizvod';


const slatko = (props) =>{
	const slatkoDiv = props.slatkisi.map((index,cur)=>{
		return(
			<Proizvod
				key = {props.slatkisi[cur].name}
				src = {props.slatkisi[cur].img}
				productName = {props.slatkisi[cur].name}
				productPrice = {props.slatkisi[cur].price.toFixed(2)}
			/>
		)
	})
	
	return(
		<Aux>
			<h2 style ={{textAlign: 'center',fontSize: '26px'}}>Slatkisi</h2>
			<div id = 'slatko' className = {classes.SlatkoContent}>
				{slatkoDiv}
			</div>
		</Aux>
		
	)
}
const mapStateToProps = state =>{
	return{
		slatkisi: state.proizvodi.slatko
	}
}
export default connect(mapStateToProps)(slatko);