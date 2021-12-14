import React from 'react';

export const SecondaryButton = ({title}) => {
	return (
		<button className="py-1.5 px-5 rounded-md   text-white font-medium transform hover:scale-110 transition-all bg-transparent" >
			{title}
		</button>
	);
};
