import React, { useState } from 'react';

export const Option = ({ icon, title,onClick, isSelected }) => {
	return (
		<div className='w-full cursor-pointer hover:bg-gray-100' onClick={onClick}>
			<div className='w-full  py-1 px-5 flex items-center'>
				<img className='w-auto h-5 mr-2' src={icon} alt={icon}/>
				<p className='text-xs'>{title}</p>
			</div>
			
		</div>
	);
};

