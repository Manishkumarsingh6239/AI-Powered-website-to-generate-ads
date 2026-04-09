import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/Generator';
import Result from './pages/Result';
import MyGenerations from './pages/MyGenerations';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/generator' element={<Generator />}/>
				<Route path='/result/:projectId' element={<Result />}/>
				<Route path='/my-generations' element={<MyGenerations />}/>
				
			</Routes>


			<Footer />
		</>
	);
}
export default App;