import React from 'react';

const PrimaryButton = ({ title }) => {
	return (
		<button className=" bg-pink-800 py-1.5 px-5 rounded-md shadow-md m-12 text-white font-medium transform hover:scale-110 transition-all	">
			{title}
		</button>
	);
};

export default PrimaryButton;
