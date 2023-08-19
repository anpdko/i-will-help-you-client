import React from 'react'
import RoutesApp from './RoutesApp';
import { Navbar, Footer } from './components';

function App() {
	return (
		<React.Fragment>
			<Navbar />
			<RoutesApp />
			<Footer />
		</React.Fragment>
	);
}

export default App;
