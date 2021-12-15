import React, { useEffect, useRef, useState } from 'react';

export const Select = ({ children, className, value, setValue, queryKey }) => {

	const [showSelectOptions, setShowSelectOptions] = useState(false);

	const selectRef = useRef();
	const inputRef = useRef();


	const handleSearchInput = (e) => {
		setValue(e.target.value.toLowerCase());
	};

	const getFilteredChildren = () => {
		if(value === '') return children;
		return children.filter(child => {return child.props[queryKey].toLowerCase().startsWith(value);});
	};


	useEffect(() => {
		const changeVisibility = (e) => {
			if (showSelectOptions && selectRef.current && !selectRef.current.contains(e.target)) setShowSelectOptions(false);
		
		};

		document.addEventListener('mousedown', changeVisibility);
		return () => {
			document.removeEventListener('mousedown', changeVisibility);
		};
	}, [showSelectOptions]);

	return (
		<div className={`flex flex-col relative  ${className}`} ref={selectRef} onClick={() => { inputRef.current.focus();}} >
			<div onClick={() => { setShowSelectOptions(true);}} className=' flex flex-row items-center justify-between py-3 px-5'>
				<div className='w-full text-xs text-gray-400  '>
					<input className='w-full outline-none' value={value} onChange={handleSearchInput} ref={inputRef} />
				</div>
				
				<i className={`${value !== ''? '': 'bx bx-chevron-'}${showSelectOptions? 'up': 'down'}`} />
			</div>
			{(showSelectOptions && getFilteredChildren().length > 0) && (
				<div className='absolute top-full left-0 flex bg-white flex-col w-full z-10 shadow-lg max-h-32 min-h-2 overflow-y-auto rounded-lg scrollbar' onClick={() => {
					setShowSelectOptions(false);
				}}>
					{getFilteredChildren()}
				</div>
			)}
		</div>
	);
};
