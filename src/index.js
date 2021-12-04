import './styles/index.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { RegisterView } from './views/RegisterView';
import store from './store/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" exact element={<HomeView/>}/>
					<Route path="/login" element={<LoginView/>}/>
					<Route path="/register" element={<RegisterView/>}/>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);



