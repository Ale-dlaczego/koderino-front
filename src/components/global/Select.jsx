import React, { useState } from 'react';

export const Select = ({ children, className,selectedValue }) => {
	
	const [showSelectOptions, setShowSelectOptions] = useState(false);
	return (
		<div className={`flex flex-col relative ${className}`}>
			<div onClick={() => { setShowSelectOptions((prevState) => {return !prevState;}); }} className='py-3 px-5 flex flex-row items-center justify-between'>
				<div className='w-full text-xs'>{selectedValue}</div>
				<i className='bx bx-chevron-down' />
			</div>
			{showSelectOptions && (
				<div className='absolute top-full left-0 flex bg-white flex-col w-full z-10 shadow-lg h-32 overflow-y-auto rounded-lg scrollbar' onClick={() => { setShowSelectOptions((prevState) => {return !prevState;}); }}>
					{children}
				</div>
			)}
		</div>
	);
};
