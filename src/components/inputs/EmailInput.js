import React from 'react';

const EmailInput = ({ value, setValue }) => {
	
	const handleEmailInput = (e) => {
		setValue(e.target.value);
	};

	
	return (
		<div className="border-white border-solid border-2 h-11 flex items-center px-3 rounded-md shadow-lg bg-white w-full mb-5">
			<i className="bx bxs-envelope mr-2 text-md text-our-blue" />
			<input placeholder={'Email'} value={value} onChange={handleEmailInput}
				className="text-opacity-50 outline-none  placeholder-opacity-50 w-full text-sm font-medium text-our-blue" />
		</div>
	);
};

export default EmailInput;
