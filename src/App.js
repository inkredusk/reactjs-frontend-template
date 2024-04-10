//import 'test.css'
import logo from './logo.svg';
import './App.css';

/**
 * Function component for the main App.
 *
 * @return {JSX.Element} The rendered main App component.
 */
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

ˆ
export default App;
