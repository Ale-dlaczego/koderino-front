import React from 'react';

export const ModalInput = ({ type, title, placeholder,className }) => {

	const modalInputClass = () => {
		return 'py-3 px-5 border border-gray-300 rounded-lg outline-none placeholder: text-gray-300 text-gray-400 text-xs ' ;
	};
    
	const renderTextInput = () => {
		return <input className={modalInputClass()} placeholder={placeholder }/>;
	};
    
	const renderSelectInput = () => {
		return <select className={modalInputClass()}/>;
	};

	return (
		<div className={`flex flex-col mb-6 ${className}`}>
			<label className='text-xs mb-2 font-semibold'>{title}</label>
			{type === 'select' ? renderSelectInput() : renderTextInput() }
		</div>
	);
};

