import { FileInput } from './../inputs/FileInput';
import { ModalInput } from './ModalInput';
import PrimaryButton from './../global/PrimaryButton';
import React from 'react';
import { useAxios } from '../../hooks/useAxios';

export const Modal = ({ isShown, setIsShown }) => {
	
	const { response: workPositionsResponse, loading: loadingWorkPositions, error: workPositionsError } = useAxios({
		method: 'get',
		url: 'work-positions',
	});

	// const renderWorkPositions = () => {
	// 	return workPositionsResponse.forEach(position => (
			
	// 	))
	// };

	return (
		<div className={`${isShown ? 'flex' : 'hidden'} w-full h-full fixed z-10 left-0 top-0 items-center justify-center bg-modal-bg  `}>
			<div className='w-2/6 bg-white px-10 py-12 flex-col overflow-hidden rounded-2xl shadow-2xl'>
				<h1 className='font-medium mb-10'>Nowy punkt kariery</h1>
				<div className='w-full flex flex-col'>
					<ModalInput type="select" title={'Stanowisko'}/>
					<ModalInput title={'Nazwa firmy'} placeholder={''} />
					<div className='w-full flex  items-center'>
						<div className='flex items-end w-full '>
							<ModalInput type="select" title={'Początek'} className='mr-1 w-full'/>
							<ModalInput type="select" title={''} className='w-full'/>
						</div>
						<p className='text-xs font-semibold mx-4'>do</p>
						<div className='flex items-end w-full'>
							<ModalInput type="select" title={'Koniec'} className='mr-1 w-full'/>
							<ModalInput type="select" title={''} className='w-full'/>
						</div>
					</div>
					<FileInput/>
					<div className='w-full flex mt-8'>
						<PrimaryButton title={'Zapisz'} className='bg-primary w-1/2 hover:scale-102'/>
						<PrimaryButton title={'Anuluj'} className='bg-orange w-1/2 ml-6 hover:scale-102' onClick={()=> {setIsShown(!isShown);}}/>
					</div>
				</div>
			</div>
		</div>
	);
};
