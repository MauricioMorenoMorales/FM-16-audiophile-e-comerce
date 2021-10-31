import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global-styles.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<ScrollToTop />
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
