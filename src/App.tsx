import React from 'react';
import RoutesApp from './routes/RoutesApp';
import RoutesAdmin from './routes/RoutesAdmin';
import { Routes, Route } from 'react-router-dom'

function App() {
	return (
		<React.Fragment>
			<Routes>
				<Route path='/*' element={<RoutesApp/>}/>
				<Route path='/admin/*' element={<RoutesAdmin/>}/>
			</Routes>
		</React.Fragment>
	);
}

export default App;
