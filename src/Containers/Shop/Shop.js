import React,{Component} from 'react';
import {connect} from 'react-redux';
import classes from './Shop.module.css';
import Aux from '../../hoc/Auxilary';
import Meni from '../Jelovnik/Jelovnik';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import * as action from '../../store/actions/index';

class Shop extends Component{
	
	render(){
		let sum = 0;
		let content = <h2 style = {{textAlign: 'center'}}>Tvoja korpa je prazna,idi u
	 					<Link 
	 					className ={classes.Active}
    					to= 'burger'
    					spy={true}
    					smooth={true}
    					offset= {-135}
    					duration={500}
	 					>
	 					 <span> </span>Meni
						</Link>
		 			</h2>
		if(this.props.orders.length !== 0){
			content = this.props.orders.map((cur,index)=>{
				return(
					<Aux>
					<div className = {classes.Order}>
						<div className = {classes.ImgOrder}>
							<img src = {cur.img} alt = {cur.name}/>
						</div>
						<p>Naziv proizvoda: <span>{cur.name}</span></p>
						<p>Kolicina: <span>{cur.kolicina}</span></p>
						<p>Cena: <span>{cur.totalSolo.toFixed(2)}$</span></p>
						<button onClick = {()=>this.props.deleteItem(index)} className = {classes.Delete}>
							<i className="far fa-times-circle" />
						</button>
					</div>
					</Aux>
				)
			});
			sum = this.props.orders.map(cur =>{
				return cur.totalSolo;
			}).reduce((prev,next) => prev + next,0)
		}
		return(
			<Aux>
			<div className = {classes.Shop}>
				<h1 style = {{textAlign: 'center'}}>Tvoja porudzbina</h1>
				<div className = {classes.Orders}>
					{content}
					{this.props.orders.length !== 0 ? <p style ={{textAlign:'center',fontSize: '23px'}}>UKUPNA CENA: <span>{sum.toFixed(2)}$</span></p> : null}
					
					{this.props.orders.length ?
						<NavLink
							className ={classes.ActiveBtn}
							//onClick = {props.hide}
							to = '/ContactData'
						>
							NARUCI OVDE!
						</NavLink> : null
					}
				</div>
			</div>
				<Meni/>
			</Aux>
		)
	}
}
const mapStateToProps = state =>{
	return{
		orders: state.proizvodi.listaProizvoda
	}
}

const mapDispatchToProps = dispatch =>{
	return{
		deleteItem: (index)=>dispatch(action.deleteItem(index))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop);
