//import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; //instalar react-router-dom
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
	const database = {
		name: '',
		lastname: '',
		email: '',
		phone: 401,
	};

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome database={database} />} />
				<Route
					path="/dashboard"
					element={<Dashboard database={database} />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
