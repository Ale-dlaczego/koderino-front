import React, { useState } from 'react';

export const ToggleButton = () => {

	const [activeButton, setActiveButton] = useState(true);
	
    
	const toggleActiveButton = () => {
		setActiveButton(activeButton? false: true);
	};
    
	const buttonClass = () => {
		return 'text-white text-sm font-medium py-2 px-7 transition-all';
	};

	return (
		<div className='flex rounded-xl overflow-hidden'>
			<button onClick={toggleActiveButton} className={`${buttonClass()} ${activeButton ? 'bg-primary' : 'bg-gray-300'}`}>TAK</button>
			<button onClick={toggleActiveButton} className={`${buttonClass()} ${!activeButton? 'bg-orange' : 'bg-gray-300'}`}>NIE</button>
		</div>
	);
};
