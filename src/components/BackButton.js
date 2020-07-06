import React from 'react'
import { navigate } from '@reach/router'

const BackButton = () => {
	return (
		<button onClick={() => navigate('/')} className="mx-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				className="w-6 h-6 fill-current text-gray-600 hover:text-purple-600"
			>
				<path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
			</svg>
		</button>
	)
}

export default BackButton
