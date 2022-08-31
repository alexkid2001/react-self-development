import React, { useEffect, useState, useMemo } from 'react'

import Cart from './Cart'
import Order from './Order'
import Result from './Result'
import order from "./Order";

import SettingsContext from "./context/settings";

export default function(){
	const [settings, setSettings] = useState({lang: 'ru', theme: 'light'})

	const [page, setPage] = useState('cart')
	const moveToCart = () => setPage('cart')
	const moveToOrder = () => setPage('order')
	const moveToResult = () => setPage('result')

	const [orderForm, setOrderForm] = useState([
		{
			name: 'name',
			label: 'Name',
			value: '',
			pattern: /^.{2,}$/g,
			errorMessage: 'Name is not correct',
			valid: false
		},
		{
			name: 'email',
			label: 'Email',
			value: '',
			pattern: /^.+@.+$/,
			errorMessage: 'Email is not valid',
			valid: false
		},
		{
			name: 'phone',
			label: 'Phone',
			value: '',
			pattern: /^\d{5,10}.$/,
			errorMessage: 'City is not valid',
			valid: false
		},
	])

	const orderData = {}
	orderForm.forEach(f => orderData[f.name] = f.value)

	const orderFormUpdate = (name, value) => {
		setOrderForm(orderForm.map(field => {
					if (field.name !== name) return field
					const valid = field.pattern.test(value)
					return {...field, value, valid }
				}
			)
		)
	}

	return <SettingsContext.Provider value={settings}>
	<div className="container mt-1">
		{ page === 'cart' &&
				<Cart
				 onNext={moveToOrder}
				/> }
		{ page === 'order' &&
				<Order
						onNext={moveToResult}
						onPrev={moveToCart}
						onChange={orderFormUpdate}
						orderData={orderForm}
				/> }
		{ page === 'result' &&
				<Result
						orderData={orderData}
				/>
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