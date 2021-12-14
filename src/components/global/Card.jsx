import React from 'react';

export const Card = ({className, title,children, icon, onClick}) => {
	return (
		<div className={`bg-white rounded-2xl shadow-lg p-4 ${className}`}>
			<div className='flex justify-between items-center'>
				<h4 className='font-medium text-sm'>{title}</h4>
				<i className={`text-lg ${icon}`} onClick={onClick}/>
			</div>
			{children}
		</div>
	);
};
