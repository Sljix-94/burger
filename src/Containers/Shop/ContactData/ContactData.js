import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import classes from './ContactData.module.css';
import Input from './Input/Input';
import {updateObject} from '../../../shared/utility';
import axios from 'axios';
import Spinner from '../../../shared/Spinner/Spinner';
import * as action from '../../../store/actions/index';

class ContactData extends Component{
	state = {
		orderForm: {
			name:{
				elementType: 'input',
				elementConfig:{
					type:'text',
					placeholder: 'Your name'
				},
				value: '',
				validation:{
					required: true,
					minLength: 3,
					maxLength: 35
				},
				valid: false,
				touched: false
			}, 
			street:{
				elementType: 'input',
				elementConfig:{
					type:'text',
					placeholder: 'Street'
				},
				value: '',
				validation:{
					required: true,
					minLength: 3,
					maxLength: 40
				},
				valid: false,
				touched: false
			},
			zipCode:{
				elementType: 'input',
				elementConfig:{
					type:'password',
					placeholder: 'ZIP Code'
				},
				value: '',
				validation:{
					required: true,
					minLength: 5,
					maxLength: 10
				},
				valid: false,
				touched: false
			},
			city: {
				elementType: 'input',
				elementConfig:{
					type:'text',
					placeholder: 'City'
				},
				value: '',
				validation:{
					required: true
				},
				valid: false,
				touched: false
			},
			email: {
				elementType: 'input',
				elementConfig:{
					type:'email',
					placeholder: 'E-mail'
				},
				value: '',
				validation:{
					required: true,
					monkey: '@',
					tacka: '.com'
				},
				valid: false,
				touched: false
			}
		},
		formIsValid: false,
		loading: false,
		error: false
	}

	inputChangedHandler =(e,formElement)=>{
		const updateFormElement = updateObject(this.state.orderForm[formElement],{
			value: e.target.value,
			valid: this.checkValidity(e.target.value,this.state.orderForm[formElement].validation),
			touched: true
		})
		
		const updatedOrderForm = updateObject(this.state.orderForm,{
			[formElement]: updateFormElement
		})
		
		let formIsValid = true;
		for(let key in updatedOrderForm){
			formIsValid = updatedOrderForm[key].valid && formIsValid;
		}
		this.setState({orderForm: updatedOrderForm,formIsValid: formIsValid})
	}
	
	checkValidity = (value,validation)=>{
		let isValid = true;
		if(validation.required){
			isValid = value.trim() !== '' && isValid
		}
		if(validation.minLength){
			isValid = value.length >= validation.minLength  && isValid
		}
		if(validation.maxLength){
			isValid = value.length <= validation.maxLength  && isValid
		}
		if(validation.monkey){
			isValid = value.includes(validation.monkey) && isValid
		}
		if(validation.tacka){
			isValid = value.includes(validation.tacka) && isValid
		}
		return isValid;
	}
	
	orderHandler = ()=>{
		const sum = this.props.checkOrders.map(cur =>{
				return cur.totalSolo;
			}).reduce((prev,next) => prev + next,0);
		
		const namesKolicina = this.props.checkOrders.map((cur,index)=>{
			return index + 1 + ':Naziv:' + cur.name + '--' + 'kolicina ' + cur.kolicina
		})
		
		const info = {};
		for(let key in this.state.orderForm){
			info[key] = this.state.orderForm[key].value
		}
		
		const orderData = {
			mealName: namesKolicina,
			totalSum: sum,
			info: info
		}
		this.setState({loading: true,error: false});
		
		axios.post('https://burger-order-4ffde-default-rtdb.europe-west1.firebasedatabase.app/orders.json',orderData)
		.then(res=>{
			this.setState({loading: false});
			this.props.reset();
			this.props.history.push('/');
		})
		.catch(err=>{
			this.setState({loading: false,error: true})
		})
	}
	
	render(){
		const formElementsArray = [];
		for(let key in this.state.orderForm){
			formElementsArray.push({
				id: key,
				config: this.state.orderForm[key]
			})
		}
		let content = formElementsArray.map(cur =>{
					return <Input 
								key = {cur.id}
								name = {cur.id}
								elementType = {cur.config.elementType}
								elementConfig = {cur.config.elementConfig}
								value = {cur.config.value}
								changed = {(e)=>this.inputChangedHandler(e,cur.id)}
								invalid = {!cur.config.valid}
								valid = {cur.config.valid}
								touched = {cur.config.touched}
								shouldValidate = {cur.config.validation}
							/>
				})
		if(this.state.loading){
			content = <Spinner/>
		}
		if(this.state.error){
			content = <p style = {{textAlign:'center'}}>Zao nam je,doslo je do smetnji.Molimo vas pokusajte kasnije.</p>
		}
		return(
			<div className = {classes.Container}>
				{this.props.checkOrders.length === 0 ? <Redirect to = '/'/> : null}
				<h2 style = {{textAlign: 'center'}}>Unesite vase podatke</h2>
					{content}
				{
					this.state.error ? null :
					<button
					disabled = {!this.state.formIsValid} 
				 	className = {classes.Send}
				 	onClick = {this.orderHandler}
				 >
					 POSALJI
				 </button>
				}
			</div>
		)
	}
}

const mapStateToProps = state =>{
	return{
		checkOrders: state.proizvodi.listaProizvoda
	}
}
const mapDispatchToProps = dispatch =>{
	return{
		reset: ()=>dispatch(action.reset())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactData);