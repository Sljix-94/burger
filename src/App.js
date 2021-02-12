import React,{Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Aux from './hoc/Auxilary';
import Layout from './hoc/Layout/Layout';
import MainContent from './Containers/MainContent/MainContent';
import Dostava from './Containers/Dostava/Dostava';
import Solo from './Containers/MainContent/SoloProduct/SoloProduct';
import Meni from './Containers/Jelovnik/Jelovnik';
import Shop from './Containers/Shop/Shop';
import ContactData from './Containers/Shop/ContactData/ContactData';
import Onama from './Containers/Onama/Onama';

class App extends Component{
	
	render(){
		return(
			<Aux>
				<Layout>
					<Switch>
						<Route path = '/' exact component = {MainContent}/>
						<Route path = '/jelovnik' component = {Meni} />
						<Route path = '/dostava' component = {Dostava}/>
						<Route path = '/korpa' component = {Shop}/>
						<Route path = '/ContactData' component = {ContactData}/>
						<Route path = '/onama' component = {Onama}/>
						{this.props.checkRedirect ? 
							<Route path = {'/' + this.props.path} component = {Solo}/>:	
							<Redirect to = '/'/>
						}
					</Switch>
				</Layout>
			</Aux>
		)
	}
}
const mapStateToProps = state =>{
	return{
		path: state.proizvodi.productPath,
		checkRedirect: state.proizvodi.proizvodSolo.name !== null
	}
}
export default connect(mapStateToProps)(App);
