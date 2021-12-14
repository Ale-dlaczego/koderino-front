import React from 'react';

export const FormInput = ({ value, onChange, placeholder, type, isError,errorMessage, disabled }) => {
	return (
		<div className='w-full bg-white border border-gray-300 rounded-xl p-2 relative mb-6'>
			{value ? <label className='absolute -top-1/4 transform translate-y-1/4 z-2 left-5 bg-white text-xxs w-max text-gray-400 font-medium'>{placeholder}</label> : <></>}
			<input disabled={disabled} type={type} value={value} onChange={onChange} placeholder={placeholder} className={'w-full px-2 text-sm font-medium   outline-none placeholder-gray-300'} />
			{isError ?<p className='text-xxs absolute -bottom-4 text-red-500 font-medium'>{errorMessage}</p> : <></>}	
		</div>
	);
};
