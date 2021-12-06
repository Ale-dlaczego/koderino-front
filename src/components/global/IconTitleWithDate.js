import { IconTitle } from './IconTitle';
import React from 'react';

export const IconTitleWithDate = (props) => {
	const { dateClass, date, className } = props;
	return (
		<div className={`w-full flex items-center ${className}`}>
			<IconTitle {...props} />
			<p className={dateClass}>{date}</p>
		</div>
	);
};
