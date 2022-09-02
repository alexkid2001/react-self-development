import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import StoreContext from './context/store'
import RootStore from './store/'

import App from './App';

const store = new RootStore()
store.products.load()
store.cart.load()
ReactDom.render(
		<BrowserRouter>
			<StoreContext.Provider value={store}>
				<App/>
			</StoreContext.Provider>
		</BrowserRouter>,
	document.querySelector('.app')
);

