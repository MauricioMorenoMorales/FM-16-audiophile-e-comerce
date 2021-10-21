import { Header, Footer } from './components';
import { Home, Category } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Route exact path="/" component={Home} />
				<Route
					path="/category/:categoryName(headphones|earphones|speakers)"
					component={Category}
				/>
				<Footer />
			</Router>
		</div>
	);
};

export default App;
