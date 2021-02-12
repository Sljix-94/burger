import * as actionType from './actionTypes';

export const onPushPath = (url,name,img,price)=>{
	return{
		type: actionType.PUSH_PATH,
		path: url,
		name: name,
		imgSolo:img,
		priceSolo: price
	}
};

export const kolicina = (value)=>{
	return{
		type: actionType.KOLICINA,
		kolicina: value
	}
};

export const ubaciUkorpu = ()=>{
	return{
		type: actionType.UBACI_U_SHOP_ARRAY
	}
};

export const reset = ()=>{
	return{
		type: actionType.RESET
	}
}
export const deleteItem = (index)=>{
	return{
		type: actionType.DELETE_ORDER,
		index: index
	}
}
