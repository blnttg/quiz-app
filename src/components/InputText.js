import React from 'react'

const InputText = (props) => {
	return (
		<div className="w-full">
			{props.label && (
				<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ml-1">
					{props.label}
				</label>
			)}
			<input
				className="w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded-lg py-3 px-4 mx-1 my-2 focus:outline-none focus:bg-white focus:border-gray-400"
				onChange={props.onChange}
				value={props.value}
				placeholder={props.placeholder}
			/>
		</div>
	)
}

export default InputText
