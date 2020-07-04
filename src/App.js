import React from 'react'
import Answer from './components/Answer'
import Question from './components/Question'
import Button from './components/Button'

function App() {
	return (
		<div className="">
			<div className="flex flex-col justify-content items-center w-full">
				<Question value="Which of these U.S. Presidents appeared on the television series Laugh-In?" />
				<div className="w-10/12 md:w-4/6">
					<Answer value="Lyndon Johnson" />
					<Answer value="Richard Nixon" />
					<Answer value="Jimmy Carter" />
					<Answer value="Gerald Ford" />
				</div>
				<Button onClick={() => console.log('next')}>Next</Button>
			</div>
		</div>
	)
}

export default App
