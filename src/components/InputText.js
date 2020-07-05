import React from 'react'

const InputText = (props) => {
	return (
		<div className="w-full max-w-lg">
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1">
				{props.label}
			</label>
			<input
				className="bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-400"
				onChange={props.onChange}
				value={props.value}
			/>
		</div>
	)
}

export default InputText
