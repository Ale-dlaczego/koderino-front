import React from 'react';

export const CheckboxInput = ({value,setValue}) => {

	

	return (
		<div className='w-4 h-4 border-2 border-our-blue rounded-sm cursor-pointer relative flex items-center justify-center bg-white' 
			onClick={() => {
				setValue(!value);
			}}>
			{value? <span className='font-bold bg-transparent select-none'>✓</span>: <></>}
			
		</div>
	);
};
