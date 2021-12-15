import React, { useState } from 'react';

import { FileInput } from './../inputs/FileInput';
import { ModalInput } from './ModalInput';
import { Option } from './Option';
import PrimaryButton from './../global/PrimaryButton';
import { Select } from '../global/Select';
import moment from 'moment';
import { useAxios } from '../../hooks/useAxios';

export const Modal = ({ isShown, setIsShown }) => {
	
	const currentMonth = moment().get('month') + 1;
	const currentYear = moment().get('year');
	const [workPositionValue, setWorkPositionValue] = useState('');
	const [startMonthValue, setStartMonthValue] = useState(currentMonth);
	const [startYearValue, setStartYearValue] = useState(currentYear);
	const [endMonthValue, setEndMonthValue] = useState(currentMonth);
	const [endYearValue, setEndYearValue] = useState(currentYear);

	const { response: workPositionsResponse, loading: loadingWorkPositions, error: workPositionsError } = useAxios({
		method: 'get',
		url: 'work-positions',
	});
	const renderWorkPositions = () => {
		return workPositionsResponse.map(position => {
			return (
				<Option key={position._id} icon={position.iconUrl} title={position.name} isSelected={position.name == workPositionValue} onClick={()=>{return setWorkPositionValue(position.name);}}/>
			);});
	};

	const renderMonths = (setValue) => {
		const monthsElements = [];
		for (let i = 1; i <= 12; i++){
			const month = i < 10 ? `0${i}` : i.toString();
			monthsElements.push(<Option onClick={() => {return setValue(month);}} key={month} title={month} />);
		}
		return monthsElements;
	};

	const renderYears = (setValue) => {
		const yearsElements = [];
		for (let i = currentYear - 80; i <= currentYear; i++){
			const year = i.toString();
			yearsElements.push(<Option onClick={() => {return setValue(year);}} key={year} title={year}/>);
		}
		return yearsElements;
	};
	

	return (
		<div className={`${isShown ? 'flex' : 'hidden'} w-full h-full fixed z-10 left-0 top-0 items-center justify-center bg-modal-bg  `}>
			<div className='w-2/6 bg-white px-10 py-12 flex-col overflow-hidden rounded-2xl shadow-2xl'>
				<h1 className='font-medium mb-10'>Nowy punkt kariery</h1>
				<div className='w-full flex flex-col '>
					<ModalInput title='Stanowisko'>
						<Select className={'border border-gray-300 rounded-lg '} value={workPositionValue} setValue={setWorkPositionValue} queryKey='title'>
							{!loadingWorkPositions && renderWorkPositions()}
						</Select>
					</ModalInput>
					<ModalInput title={'Nazwa firmy'} placeholder={''} type='text' />
					<div className='w-full flex  items-center'>
						<div className='flex items-end w-full '>
							<ModalInput title='Początek' className='mr-1 w-full'>
								<Select className={'border border-gray-300 rounded-lg '} value={startYearValue} setValue={setStartYearValue} queryKey='title'>
									{renderYears(setStartYearValue)}
								</Select>
							</ModalInput>
							<ModalInput title='' className='w-full'>
								<Select className={'border border-gray-300 rounded-lg '} value={startMonthValue} setValue={setStartMonthValue} queryKey='title'>
									{renderMonths(setStartMonthValue)}
								</Select>
							</ModalInput>
						</div>
						<p className='text-xs font-semibold mx-4'>do</p>
						<div className='flex items-end w-full'>
							<ModalInput title='Koniec' className='mr-1 w-full'>
								<Select className={'border border-gray-300 rounded-lg '} value={endYearValue} setValue={setEndYearValue} queryKey='title'>
									{renderYears(setEndYearValue)}
								</Select>
							</ModalInput>
							<ModalInput title='' className='w-full'>
								<Select className={'border border-gray-300 rounded-lg '} value={endMonthValue} setValue={setEndMonthValue} queryKey='title'>
									{renderMonths(setEndMonthValue)}
								</Select>
							</ModalInput>
						</div>
					</div>
					{/* <FileInput/> */}
					<div className='w-full flex mt-8'>
						<PrimaryButton title={'Zapisz'} className='bg-primary w-1/2 hover:scale-102'/>
						<PrimaryButton title={'Anuluj'} className='bg-orange w-1/2 ml-6 hover:scale-102' onClick={()=> {setIsShown(!isShown);}}/>
					</div>
				</div>
			</div>
		</div>
	);
};
