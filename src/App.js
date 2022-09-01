import React, { useEffect, useState, useMemo } from 'react'
import { Routes, Route } from "react-router-dom";

import Cart from './views/Cart'
import Order from './views/Order'
import Result from './views/Result'
import E404 from './views/E404'

import SettingsContext from "./context/settings";

export default function(){
	const [settings, setSettings] = useState({lang: 'ru', theme: 'light'})

	return <SettingsContext.Provider value={settings}>
	<div className="container mt-1">
		<Routes>
			<Route path='/' element={<Cart />} />
			<Route path='/order' element={<Order />} />
			<Route path='/result' element={<Result />} />
			<Route path='*' element={<E404 />} />
		</Routes>
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