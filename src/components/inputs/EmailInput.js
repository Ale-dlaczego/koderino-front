import React from 'react';

const EmailInput = () => {
	return (
		<div className="border-pink-800 border-solid border-2 w-64 h-9 flex items-center px-3	rounded-md">
			<i className="bx bxs-envelope mr-2 text-md text-pink-300"/>
			<input placeholder={'Email'}
				className="text-pink-800 text-opacity-50 outline-none placeholder-pink-800 placeholder-opacity-50	text-sm font-medium"/>
		</div>
	);
};

export default EmailInput;
