import PrimaryButton from '../global/PrimaryButton';
import React from 'react';

export const FileInput = ({className}) => {
	return (
		<>
			<label htmlFor='this-file'>
				<div className={` border-dotted border-2 border-gray-300 rounded-2xl py-5 ${className}`}>
					<div className='w-full flex flex-col justify-center items-center'>
						<i className='bx bx-cloud-upload text-3xl text-gray-500' />
						<p className='text-sm my-4'>Upuść pliki lub załaduj</p>
						<PrimaryButton title='Załaduj' className={'bg-primary'} onClick={()=>{}} />
					</div>
				</div>
			</label>
			<input type="file" className='hidden' id='this-file'/>
		</>
	);
};
