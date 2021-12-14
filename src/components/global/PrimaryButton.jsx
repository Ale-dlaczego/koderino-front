import React from 'react';

const PrimaryButton = ({ title,onClick,className }) => {
	return (
		<button className={`py-1.5 px-5 rounded-md shadow-md  text-white font-medium transform  transition-all ${className}`} onClick={onClick}>
			{title}
		</button>
	);
};

export default PrimaryButton;
