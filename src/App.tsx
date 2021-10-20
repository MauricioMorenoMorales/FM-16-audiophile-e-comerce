import { Header, Footer } from './components';
import { Home, Category } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import data from './data.json';

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Route exact path="/" component={Home} />
				<Route path="/category/:categoryName" component={Category} />
			</Router>
			<Footer />
		</div>
	);
};

export default App;
