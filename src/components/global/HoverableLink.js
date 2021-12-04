import React from 'react';

export const HoverableLink = ({ title, linkTo, className }) => {
	
	const classes = () => {
		return `text-white font-medium  hover:text-our-blue transition-all hover:font-bold  ${className}`;
	};

	return (
		<a href={linkTo} className={classes()} >{title}</a>
	);
};
