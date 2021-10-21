import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles-reset.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<ScrollToTop />
			<App />
		</Router>
	</React.StrictMode>,
	document.getElementById('root'),
);
