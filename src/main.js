import React from 'react'
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import StoreContext from './context/store'
import cartStore from './store/cart'

import App from './App';

const store = {
	cart: cartStore
}

ReactDom.render(
		<StoreContext.Provider value={store}>
			<App/>
		</StoreContext.Provider>,
	document.querySelector('.app')
);

