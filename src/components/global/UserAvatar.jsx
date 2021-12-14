import React from 'react';

export const UserAvatar = ({img, className, children}) => {
	return (
		<div style={{ backgroundImage: `url(${img})` }} className={`rounded-half bg-center bg-no-repeat shadow-xl text-xs font-semibold flex justify-center items-center bg-gray-100 bg-cover  ${className}`} >
			{ children}
		</div>
	);
};
