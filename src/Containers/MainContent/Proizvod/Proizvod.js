import React from 'react';
import classes from './Proizvod.module.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as action from '../../../store/actions/index';

const proizvod = (props)=>{
	return(
			<div className = {classes.Burger}>
				<div className = {classes.ImgContainer}>
					<img src = {props.src} alt = {props.productName}/>
				</div>
				<div className = {classes.Info}>
					<h4 style = {{color: '#fff'}}>{props.productName}</h4>
					<p>{props.productPrice}$</p>
					<NavLink
						onClick = {()=>props.pushPath(props.productName,props.productName,props.src,props.productPrice)}
						to={props.productName}
						exact = {props.exact}
						className = {classes.AddBtn}
					>
						Add
					</NavLink>
				</div>
			</div>
	)
}

const mapDispatchToProps = dispatch =>{
	return{
		pushPath: (url,name,img,price)=>dispatch(action.onPushPath(url,name,img,price))
	}
}
export default connect(null,mapDispatchToProps)(proizvod);


