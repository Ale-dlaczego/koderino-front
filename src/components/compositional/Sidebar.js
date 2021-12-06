import { Logo } from './../global/Logo';
import React from 'react';

export const Sidebar = () => {
	return (
		<div className='h-full fixed pl-7 py-5'>
			<div className='bg-primary w-14 h-full rounded-2xl flex justify-center py-3 top-0' >
				<Logo/>
			</div>
		</div>
	);
};
