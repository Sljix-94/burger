import React,{Component} from 'react';
//import classes from './Layout.module.css';
import Aux from '../Auxilary';
import Toolbar from '../../ComponentHeader/Toolbar/Toolbar';
import SideDrawer from '../../ComponentHeader/SideDrawer/SideDrawer';
import Footer from '../../Containers/MainContent/Footer/Footer';

class Layout extends Component{
	
	state = {
		show: false
	}

	showHandler = ()=>{
		this.setState({show: true})
	}
	hideHandler = ()=>{
		this.setState({show: false})
	}
	render(){
		return(
			<Aux>
				<div style = {{marginBottom: '60px'}}>
					<Toolbar show = {this.showHandler}/>
				</div>
				<SideDrawer show = {this.state.show} hide = {this.hideHandler}/>
				<main>
					{this.props.children}
				</main>
				<Footer/>
			</Aux>
		)
	}
}
export default Layout;