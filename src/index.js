import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'animate.css'
import './assets/main.css'
import App from './App'
import store from './app/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
