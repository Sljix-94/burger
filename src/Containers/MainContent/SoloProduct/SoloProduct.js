import React,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './SoloProduct.module.css';
import {NavLink} from 'react-router-dom';
import * as action from '../../../store/actions/index';

class SoloProduct extends Component{
	componentDidMount(){
		this.props.soloProizvod.kolicina = 1
	}
	render(){
		return(
			<div className = {classes.Container}>
				<div className = {classes.Img}>
					<img src={this.props.soloProizvod.img} alt={this.props.soloProizvod.name}/>
				</div>
				<div className = {classes.Info}>
					<p className = {classes.Name}>{this.props.soloProizvod.name}</p>
					<p className = {classes.Price}>{this.props.soloProizvod.fixedPrice.toFixed(2)} $</p>
					<div className = {classes.Form}>
						<label for="kolicina">Kolicina:</label>
						<select name="kolicina" id="kolicina" onChange = {(e)=>this.props.kolicina(e)}>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
							<option value="6">6</option>
							<option value="7">7</option>
							<option value="8">8</option>
							<option value="9">9</option>
							<option value="10">10</option>
						</select>
					</div>
					<NavLink
						className ={classes.Order}
						onClick = {this.props.ubaciuShop}
						to = '/korpa'
					>
						Ubaci u korpu!
					</NavLink>		
				</div>
			</div>
		)
	}
}
const mapStateToProps = state =>{
	return{
		soloProizvod: state.proizvodi.proizvodSolo
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		kolicina: (e)=>dispatch(action.kolicina(e.target.value)),
		ubaciuShop:()=>dispatch(action.ubaciUkorpu())
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(SoloProduct);
