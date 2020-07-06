import React from 'react'
import { Router } from '@reach/router'
import Game from './containers/Game'
import Editor from './containers/Editor'
import Start from './containers/Start'
import Finish from './containers/Finish'

const App = () => {
	return (
		<Router>
			<Start path="/" default />
			<Game path="/play" />
			<Finish path="/finish" />
			<Editor path="/questions" />
		</Router>
	)
}

export default App
