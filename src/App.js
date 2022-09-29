// Imported react
import Container from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

// Imported components
import Menu from './components/Menu'

// Imported pages
import Home from './pages/Home'
import PeoplePage from './pages/PeoplePage'
import People from './pages/People'
import FilmPage from './pages/FilmPage'
import Film from './pages/Film'


const App = () => {

	return (
		<div id="App">
			<Menu />

			<Container className="py-3">
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/people/" element={<PeoplePage />} />
					<Route path="/people/:id" element={<People />} />
					<Route path="/films" element={<FilmPage />} />
					<Route path="/films/:id" element={<Film />} />
					
				</Routes>
			</Container>
		</div>
	)
}

export default App
