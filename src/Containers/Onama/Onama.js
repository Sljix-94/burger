import React from 'react';
import classes from './Onama.module.css';

const onama = (props)=>{
	return(
		<div className = {classes.Container}>
			<div className = {classes.Header}>
				<div className = {classes.ImageContainer}>
					<img src="https://images.unsplash.com/photo-1569917761875-e2897cee7d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="shop"/>
				</div>
				<div className = {classes.Content}>
					<h1>Burger Empire</h1>
					<p>Novo mesto u gradu smešteno u srcu Bulevara (u neposrednoj blizini opstine Vozdovac).</p>

					<p>
						Prepoznatljivi burgeri vrhunskog kvaliteta u autentičnom ambijentu postaće deo vaše svakodnevnice.
					</p>
				</div>
			</div>
			<div className = {classes.Gallery}>
				<div className = {classes.Row}>
					<div className = {classes.imageContent}>
						<img src="https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" alt="shop1"/>
					</div>
					<div className = {classes.imageContent}>
						<img src="https://images.unsplash.com/photo-1605961794124-adbe15b85e40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="shop"/>
					</div>
					<div className = {classes.imageContent}>
						<img src="https://images.unsplash.com/photo-1605727328079-f3115619d3a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="burger"/>
					</div>
					<div className = {classes.imageContent}>
						<img src="https://images.unsplash.com/photo-1599054228863-88e0b902a32f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" alt="shop3"/>
					</div>
					<div className = {classes.imageContent}>
						<img src="https://images.unsplash.com/photo-1571805618149-3a772570ebcd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="burger2"/>
					</div>
					<div className = {classes.imageContent}>
						<img src="https://images.unsplash.com/photo-1541557435984-1c79685a082b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="burger1"/>
					</div>
				</div>
			</div>
		</div>
	)
}
export default onama;