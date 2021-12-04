import React from 'react';

const PrimaryButton = ({ title }) => {
	return (
		<button className="py-1.5 px-5 rounded-md shadow-md  text-white font-medium transform hover:scale-110 transition-all bg-our-blue" >
			{title}
		</button>
	);
};

export default PrimaryButton;
