import React, { useState } from 'react';

import PropTypes from 'prop-types';

export const WorkPositionItem = ({ icon, title,onClick }) => {
	return (
		<div className='w-full  cursor-pointer hover:bg-gray-100 ' onClick={onClick }>
			<div className='w-full  py-1 px-5 flex items-center'>
				<img className='w-auto h-5 mr-2' src={icon} alt={icon}/>
				<p className='text-xs'>{title}</p>
			</div>
			
		</div>
	);
};

WorkPositionItem.propTypes = {
	icon: PropTypes.string,
	title: PropTypes.string
};