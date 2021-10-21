import { Header, Footer } from './components';
import { Home, Category, Product } from './pages';
import { Route, Switch } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route
					exact
					path="/category/:categoryName(headphones|earphones|speakers)"
					component={Category}
				/>
				<Route exact path="/products/:productSlug" component={Product} />
				<Route path="*" component={Footer} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
