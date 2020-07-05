import React from 'react'
import { Router } from '@reach/router'
import Game from './containers/Game'
import Editor from './containers/Editor'
import Start from './containers/Start'

function App() {
	return (
		<Router className="flex flex-col justify-center items-center max-w-4xl mx-auto">
			<Start path="/" />
			<Game path="/play" />
			<Editor path="/questions" />
		</Router>
	)
}

export default App
