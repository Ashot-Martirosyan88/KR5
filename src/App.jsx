import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'

function App(props) {
	return (
		<>
			<Nav />
			<Cards data={props.data} />
		</>
	)
}

export default App
