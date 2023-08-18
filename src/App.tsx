import RoutesApp from './RoutesApp';
import { Navbar, Footer } from './components';

function App() {
	return (
		<div className="container">
			<Navbar />
			<RoutesApp />
			<Footer />
		</div>
	);
}

export default App;
