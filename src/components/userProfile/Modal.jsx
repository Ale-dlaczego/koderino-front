import React, { useState } from 'react';

import { FileInput } from './../inputs/FileInput';
import { ModalInput } from './ModalInput';
import PrimaryButton from './../global/PrimaryButton';
import { Select } from '../global/Select';
import { WorkPositionItem } from './WorkPositionItem';
import moment from 'moment';
import { useAxios } from '../../hooks/useAxios';

export const Modal = ({ isShown, setIsShown }) => {
	
	const currentMonth = moment().get('month') + 1;
	const currentYear = moment().get('year');
	const [workPositionValue, setWorkPositionValue] = useState('');
	

	const { response: workPositionsResponse, loading: loadingWorkPositions, error: workPositionsError } = useAxios({
		method: 'get',
		url: 'work-positions',
	});
	const renderWorkPositions = () => {
		return workPositionsResponse.map(position => {
			return (
				<WorkPositionItem key={position.id} icon={position.iconUrl} title={position.name} onClick={()=>{return setWorkPositionValue(position.name);}}/>
			);});
	};

	const renderMonths = () => {
		const monthsElements = [];
		for (let i = 1; i <= 12; i++){
			const month = i < 10 ? `0${i}` : i;
			monthsElements.push(<option value={month}>{month}</option>);
		}
		return monthsElements;
	};

	const renderYears = () => {
		const yearsElements = [];
		for (let i = currentYear - 80; i <= currentYear; i++){
			yearsElements.push(<option value={i}>{i}</option>);
		}
		return yearsElements;
	};


	return (
		<div className={`${isShown ? 'flex' : 'hidden'} w-full h-full fixed z-10 left-0 top-0 items-center justify-center bg-modal-bg  `}>
			<div className='w-2/6 bg-white px-10 py-12 flex-col overflow-hidden rounded-2xl shadow-2xl'>
				{console.log(workPositionValue)}
				<h1 className='font-medium mb-10'>Nowy punkt kariery</h1>
				<div className='w-full flex flex-col '>
					{console.log(loadingWorkPositions)}
					<Select className={'border border-gray-300 rounded-lg mb-6'} selectedValue={workPositionValue}>
						{!loadingWorkPositions && renderWorkPositions()}
					</Select>
					<ModalInput title={'Nazwa firmy'} placeholder={''} />
					<div className='w-full flex  items-center'>
						<div className='flex items-end w-full '>
							<ModalInput type="select" title={'Początek'} defaultValue={currentYear} className='mr-1 w-full'>{renderYears()}</ModalInput>
							<ModalInput type="select" title={''} defaultValue={currentMonth} className='w-full'>{renderMonths()}</ModalInput>
						</div>
						<p className='text-xs font-semibold mx-4'>do</p>
						<div className='flex items-end w-full'>
							<ModalInput type="select" title={'Koniec'} defaultValue={currentYear} className='mr-1 w-full'>{renderYears()}</ModalInput>
							<ModalInput type="select" title={''} defaultValue={currentMonth} className='w-full'>{renderMonths()}</ModalInput>
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
