import React from 'react';
import { ToggleButton } from './ToggleButton';

export const ToggleButtonWithText = ({title, subtitle}) => {
	return (
		<div className='w-full flex justify-between mb-5'>
			<div className='flex flex-col'>
				<p className='font-semibold text-sm'>{title}</p>
				<p className='text-xs'>{subtitle}</p>
			</div>
			<ToggleButton/>
		</div>
	);
};
