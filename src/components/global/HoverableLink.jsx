import { Link } from 'react-router-dom';
import React from 'react';

export const HoverableLink = ({ title, linkTo, className }) => {
	
	const classes = () => {
		return `text-white font-medium  hover:text-our-blue transition-all hover:font-bold  ${className}`;
	};

	return (
		<Link to={linkTo} className={classes()} >{title}</Link>
	);
};
