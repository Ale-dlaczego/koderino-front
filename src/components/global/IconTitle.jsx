import React from 'react';

export const IconTitle = ({title,subtitle, icon, iconClass, titleClass, subtitleClass}) => {
	return (
		<div className='flex  items-center'>
			<div style={{backgroundImage: `url(${icon})`}} className={` bg-center bg-no-repeat bg-cover mr-1.5 ${iconClass}`} />
			<div className='flex flex-col'>
				<h6 className={titleClass}>{title}</h6>
				<p className={subtitleClass}>{subtitle}</p>
			</div>
			
		</div>
	);
};
