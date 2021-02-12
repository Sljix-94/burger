import React from 'react';
import classes from './Input.module.css';

const input = props =>{
	let atachedClasses = [classes.Input]
	if(props.invalid && props.touched && props.shouldValidate){
	   atachedClasses.push(classes.Error)
	 }
	if(props.valid && props.touched && props.shouldValidate){
	   atachedClasses.push(classes.Succes)
	 }
	   
	let inputElement = null;
	   
	switch(props.elementType){
			case('input'):
				inputElement = <input 
									className = {atachedClasses.join(' ')} 
									{...props.elementConfig}
									value = {props.value}
									onChange = {props.changed}
								/>;
			break;
			
			case('textarea'):
				inputElement = <textarea 
									className = {atachedClasses.join(' ')}
									{...props.elementConfig}
									value = {props.value}
									onChange = {props.changed}
								/>;
			break;
			default:
				inputElement = <input 
									className = {atachedClasses.join(' ')} 
									{...props.elementConfig}
									value = {props.value}
									onChange = {props.changed}
								/>;
	}
	return(
		<div className = {classes.Input}>
			<label>{props.name.toUpperCase()}</label>
			{inputElement}
		</div>
	)
}
export default input;