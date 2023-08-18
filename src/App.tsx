import RoutesApp from './RoutesApp';
import { Navbar, Footer, Banners } from './components';

function App() {
	return (
		<div className="container">
			<Banners />
			<Navbar />
			<RoutesApp />
			<Footer />
		</div>
	);
}

export default App;
