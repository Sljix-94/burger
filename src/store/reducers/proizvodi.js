import * as actionType from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

const initialState = {
	burgers:[
		{
			name: 'Burger One',
			price: 7.50,
			img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1052&q=80'
		},
		{
			name: 'Burger Two',
			price: 9.50,
			img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=902&q=80'
		},
		{
			name: 'Burger Tree',
			price: 11.80,
			img: 'https://images.unsplash.com/photo-1571116260185-78bf30c0cc95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1190&q=80'
		},
		{
			name: 'Burger Four',
			price: 12,
			img: 'https://images.unsplash.com/photo-1599113234792-18621e4f9f05?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
		},
		{
			name: 'Burger Five',
			price: 12,
			img: 'https://images.unsplash.com/photo-1542574271-7f3b92e6c821?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
		},
		{
			name: 'Burger Six',
			price: 8,
			img: 'https://images.unsplash.com/photo-1549611016-3a70d82b5040?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1016&q=80'
		}
	],
	slatko:[
		{
			name: 'Slatko One',
			price: 2.50,
			img: 'https://images.unsplash.com/photo-1597699401474-e8714c1b7879?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
		},
		{
			name: 'Slatko Two',
			price: 3.50,
			img: 'https://images.unsplash.com/photo-1551025119-77673c1d37cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
		},
		{
			name: 'Slatko Tree',
			price: 4.80,
			img: 'https://images.unsplash.com/photo-1562234136-4d570697ead2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1039&q=80'
		},
		{
			name: 'Slatko Four',
			price: 3,
			img: 'https://images.unsplash.com/photo-1561845730-208ad5910553?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
		},
		{
			name: 'Slatko Five',
			price: 4,
			img: 'https://images.unsplash.com/photo-1532678465554-94846274c297?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
		},
		{
			name: 'Slatko Six',
			price: 4,
			img: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
		}
	],
	pice:[
		{
			name: 'Coca-Cola',
			price: 1.50,
			img: 'https://images.unsplash.com/photo-1561758033-48d52648ae8b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
		},
		{
			name: 'Corona',
			price: 3.50,
			img: 'https://images.unsplash.com/photo-1549231482-5cf39d19fba4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'
		},
		{
			name: 'Heineken',
			price: 2.80,
			img: 'https://images.unsplash.com/photo-1516128043650-037fbdbd0b6e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80'
		},
		{
			name: 'Alfa',
			price: 2.5,
			img: 'https://images.unsplash.com/photo-1575026790968-a60e29365048?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'
		},
		{
			name: 'Sprite',
			price: 1.5,
			img: 'https://images.unsplash.com/photo-1592860893757-84536a1c9b82?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
		}
	],
	productPath: '',
	proizvodSolo: {
		name: null,
		kolicina: 1,
		fixedPrice: null,
		img: '',
		totalSolo: 0
	},
	listaProizvoda:[]
}

function pushPath(state,action){
	return updateObject(state,{
		productPath: action.path,
		proizvodSolo: updateObject(state.proizvodSolo,{
					name: action.name,
					fixedPrice: Number(action.priceSolo),
					img: action.imgSolo,
					totalSolo: Number(action.priceSolo)
		})
	})
}

function kolicina(state,action){
	return updateObject(state,{
		proizvodSolo: updateObject(state.proizvodSolo,{
					kolicina: Number(action.kolicina),
					fixedPrice: state.proizvodSolo.fixedPrice,
					totalSolo: Number(action.kolicina) === 1 ? state.proizvodSolo.fixedPrice : Number(action.kolicina) * state.proizvodSolo.fixedPrice
		})
	})
}

const ubaciUkorpu = (state,action)=>{
	return updateObject(state,{
		listaProizvoda: state.listaProizvoda.concat(state.proizvodSolo)
	})
}

const deleteOrder = (state,action)=>{
	return updateObject(state,{
			listaProizvoda: state.listaProizvoda.filter((cur,index)=> index !== action.index)
	})
}

function reset(state,action){
	return updateObject(state,{
		listaProizvoda: []
	})
}

const reducer = (state = initialState,action)=>{
	switch(action.type){
		case actionType.PUSH_PATH: return pushPath(state,action);
		case actionType.KOLICINA: return kolicina(state,action);
		case actionType.UBACI_U_SHOP_ARRAY: return ubaciUkorpu(state,action);
		case actionType.DELETE_ORDER: return deleteOrder(state,action);
		case actionType.RESET: return reset(state,action);
		default:return state;
	}
}
export default reducer;

