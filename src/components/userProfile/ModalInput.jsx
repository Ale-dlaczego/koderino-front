import PropTypes from 'prop-types';
import React from 'react';

export const ModalInput = ({ type, title, placeholder,className,children,defaultValue }) => {

	const modalInputClass = () => {
		return 'py-3 px-5 border border-gray-300 rounded-lg outline-none placeholder: text-gray-300 text-gray-400 text-xs' ;
	};
    
	const renderTextInput = () => {
		return <input className={modalInputClass()} placeholder={placeholder }/>;
	};
    
	const renderSelectInput = () => {
		return <select className={modalInputClass()} defaultValue={defaultValue}>
			{children}
		</select>;
	};

	return (
		<div className={`flex flex-col mb-6 ${className}`}>
			<label className='text-xs mb-2 font-semibold'>{title}</label>
			{type === 'select' ? renderSelectInput() : renderTextInput() }
		</div>
	);
};

ModalInput.propTypes = {
	type: PropTypes.string,
	title: PropTypes.string,
	placeholder: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node
};