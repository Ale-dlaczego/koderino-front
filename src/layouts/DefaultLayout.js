import React from 'react';
import { Sidebar } from './../components/compositional/Sidebar';

export const DefaultLayout = ({children}) => {
	return (
		<div className='min-w-screen min-h-screen bg-page-bg relative' >
			{< Sidebar />}
			<div className='pb-5 pr-7 container h-full flex m-auto'>
				{children}
			</div>
		</div>
	);
};
