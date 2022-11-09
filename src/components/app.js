import { createContext, h } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import createAppState from './my-app-state';
// Code-splitting is automated for `routes` directory
import Home from '../routes/home/index.jsx';
import Profile from '../routes/profile';

export const AppState = createContext();

const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="me" />
			<Profile path="/profile/:user" />
		</Router>
	</div>
)
const AppWrapped = ()=>(<AppState.Provider value={createAppState()}><App/></AppState.Provider>)

export default AppWrapped;
