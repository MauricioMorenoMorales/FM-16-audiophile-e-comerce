import { Header, Footer } from './components';

import { Home } from './pages';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<Header />
			<Router>
				<Route exact path="/" component={Home} />
			</Router>
			<Footer />
		</div>
	);
};

export default App;
