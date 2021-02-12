import React,{Component} from 'react';
import classes from './DostavaSingle.module.css';

class DostavaSingle extends Component{
	state = {
		isOpen: false
	}

	toggle =()=>{
		this.setState({isOpen: !this.state.isOpen})
	}
	
	render(){
		
		return(
			<div className = {classes.Acording}>
				<div className = {classes.AcordingHeader} onClick = {this.toggle}>
					{this.state.isOpen ? <i class="fas fa-minus"></i>:
					<i className="fas fa-plus"></i>}
					<h3>{this.props.title}</h3>
				</div>
				{this.state.isOpen ?
					<div className = {classes.AcordingBody}>
						<p>{this.props.body}</p>
					</div> :
				null
				}
			</div>
		)
	}
}

export default DostavaSingle;