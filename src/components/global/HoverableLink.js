import React from 'react';

export const HoverableLink = ({title, linkTo, fontSize, margin}) => {
	return (
		<a href={linkTo} className={`text-white font-medium  hover:text-our-blue transition-all hover:font-semibold ${fontSize} ${margin}`} >{title}</a>
	);
};
