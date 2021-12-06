import React from 'react';

export const CareerPointCard = ({img,title,subtitle,dateFrom,dateTo}) => {
	return (
		<div className='w-1/4 flex flex-col bg-white rounded-2xl shadow-lg py-2 px-4 border border-gray-300 items-center mr-7'>
			<div className='w-full text-right'>
				<i className={'bx bx-dots-horizontal-rounded text-xl cursor-pointer'} />
			</div>
			<div style={{ backgroundImage: `url(${img})` }} className='w-28 h-28 bg-center bg-no-repeat bg-contain'/>
			<div className='flex flex-col w-full items-center mb-6'>
				<h4 className='font-semibold'>{title}</h4>
				<p className='text-sm'>{subtitle}</p>
			</div>
			<p className='font-medium text-sm mb-2'>{dateFrom}-{dateTo}</p>
		</div>
	);
};
