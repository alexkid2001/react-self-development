import React, { useEffect, useState, useMemo } from 'react'

import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import SettingsContext from "./context/settings";
import Settings from "./context/settings";

export default function(){
	const [settings, setSettings] = useState({lang: 'ru', theme: 'light'})

	const [page, setPage] = useState('cart')
	const moveToCart = () => setPage('cart')
	const moveToOrder = () => setPage('order')
	const moveToResult = () => setPage('result')

	let [ products, setProducts ] = useState(productsStub());
	let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);

	let setProductCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}

	let removeProduct = (id) => {
		setProducts(products.filter(el => el.id !== id));
	}

	const [orderForm, setOrderForm] = useState([
		{
			name: 'name',
			label: 'Name',
			value: '',
			regexp: '/a-zA-Z/g',
			warning: 'Name is not correct'
		},
		{
			name: 'email',
			label: 'Email',
			value: '',
			regexp: '/a-zA-Z/g',
			warning: 'Email is not valid'
		},
		{
			name: 'phone',
			label: 'Phone',
			value: '',
			regexp: '/a-zA-Z/g',
			warning: 'City is not valid'
		},
	])

	const orderFormUpdate = (name, value) => {
		setOrderForm(orderForm.map(field => {
					if (field.name !== name) return field
					return {...field, value}
				}
			)
		)
	}

	return <SettingsContext.Provider value={settings}>
	<div className="container mt-1">
		{ page === 'cart' &&
				<Cart
				 onNext={moveToOrder}
				 products={products}
				 onChange={setProductCnt}
				 onRemove={removeProduct}

				/> }
		{ page === 'order' &&
				<Order
						onNext={moveToResult}
						onPrev={moveToCart}
						onChange={orderFormUpdate}
						orderData={orderForm}
				/> }
		{ page === 'result' &&
				<Result products={products} />
		}
	</div>
	</SettingsContext.Provider>
}

function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}

/*
let setCnt = (id, cnt) => {
	let newProducts = [ ...products ];
	let productInd = products.findIndex(pr => pr.id == id);
	let newProduct = { ...products[productInd] };
	newProduct.cnt = cnt;
	newProducts[productInd] = newProduct;
	setProducts(newProducts);
} */

/*

function fn(i, ev){

}

let elems = document.querySeelctorAll('some');

elems.forEach((el, i) => {
	el.addEventListener('click', e => fn(i, e))

});


*/