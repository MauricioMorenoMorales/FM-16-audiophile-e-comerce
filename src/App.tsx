import { Header, Footer } from './components';
import { Home, Category, Product, Checkout } from './pages';
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
				<Route exact path="/checkout" component={Checkout} />
				<Route path="*" component={Footer} />
			</Switch>
			<Footer />
		</div>
	);
};

export default App;
