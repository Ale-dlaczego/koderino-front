import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import { AuthRoute } from './components/global/AuthRoute';
import { EditView } from './views/EditView';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { RegisterView } from './views/RegisterView';
import { ToastContainer } from 'react-toastify';
import { UserProfileView } from './views/UserProfileView';
import store from './store/store';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<HomeView/>}/>
					<Route path="/login" element={<LoginView/>}/>
					<Route path="/register" element={<RegisterView />} />
					<Route path='/user-profile' element ={<UserProfileView/>}/>
					<Route path='/dashboard' element={<AuthRoute>
						<HomeView />
					</AuthRoute>} />
					<Route path='/edit' element={<AuthRoute>
						<EditView />
					</AuthRoute>} />
				</Routes>
			</BrowserRouter>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);



