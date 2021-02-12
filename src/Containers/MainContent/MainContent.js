import React,{Component} from 'react';
import classes from './MainContent.module.css';
import NavBar from './NavBar/NavBar';
import Meni from '../Jelovnik/Jelovnik';

class MainContent extends Component{
	
	render(){
		return(
		<div id = 'pocetna'>
			<div className = {classes.Container}>
				<div className = {classes.Content}>
					<h1 className = {classes.Heading}>Welcome to our Burger Empire!</h1>
					<NavBar/>
				</div>
			</div>
			<Meni/>
		</div>
		)
	}
}
export default MainContent;
