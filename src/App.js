import React, { useEffect, useState, useMemo } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import RoutesView from './routes'
import CartStat from "./componets/cart";
import SettingsContext from "./context/settings";

export default function(){
	const [settings, setSettings] = useState({lang: 'ru', theme: 'light'})

	return <SettingsContext.Provider value={settings}>
		<header>
			<div className="container mt-1">
				<div className="row justify-content-between">
					<div className="col">Logo</div>
					<div className="col">
						<CartStat />
					</div>
				</div>
			</div>
		</header>
		<div>
			<div className="container mt-1">
				<div className="row">
					<aside className="col col-3">
						<ul className="list-group">
							<li className="list-group-item"><Link to="/">Home</Link></li>
							<li className="list-group-item"><Link to="/cart">Cart</Link></li>
							<li className="list-group-item"><Link to="/order">Order</Link></li>
						</ul>

					</aside>
					<main className="col col-9">
						<RoutesView />
					</main>
				</div>
			</div>
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