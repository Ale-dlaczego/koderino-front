import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AvatarCard } from './../components/userProfile/AvatarCard';
import { Card } from './../components/global/Card';
import { CareerPointCard } from './../components/userProfile/CareerPointCard';
import { DefaultLayout } from './../layouts/DefaultLayout';
import { FormInput } from './../components/userProfile/FormInput';
import { Modal } from './../components/userProfile/Modal';
import PrimaryButton from './../components/global/PrimaryButton';
import { ToggleButtonWithText } from './../components/userProfile/ToggleButtonWithText';
import api from '../config/api';
import { setUserData } from '../store/userSlice';
import { toast } from 'react-toastify';
import { useAxios } from '../hooks/useAxios';
import userEditErrors from '../errors/userEditErrors';

export const EditView = () => {

	const user = useSelector(state => { return state.user.user; });	
	const [isCareerPointModal, setIsCareerPointModal] = useState(false);
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber]= useState('');
	const [localization, setLocalization] = useState('');
	const [errors, setErrors] = useState([]);
	
	
	
	const {response: userDataResponse, error: userDataError, loading: userDataLoading, fetchData: updateUserData } = useAxios({
		method: 'post',
		url: 'users-data',
		data: {
			name,
			phoneNumber,
			localization
		}
	});

	useEffect(() => {
		if (userDataError) {
			setErrors([...errors, ...userDataError]);
		}
		if (userDataResponse) {
			dispatch(setUserData(userDataResponse));
			showSuccessAlert();
			setErrors([]);
		}
	}, [userDataResponse, userDataError]);

	useEffect(() => {
		setLocalization(user.userData.localization);
		setName(user.userData.name);
		setPhoneNumber(user.userData.phoneNumber);
	}, [user]);

	const handleNameInput = (e) => {
		setName(e.target.value);
	};
	
	const handlePhoneNumberInput = (e) => {
		setPhoneNumber(e.target.value);
	};
	const handleLocalizationInput = (e) => {
		setLocalization(e.target.value);
	};

	const showCareerPointModal = () => {
		setIsCareerPointModal(!isCareerPointModal);
	};

	
	
	const translateErrorsMessage = () => {
		if (errors.length === 0) return;
		switch (errors[0]) {
		case userEditErrors.PHONE_NUMBER_MUST_BE_LONGER_THAN_OR_EQUAL_TO_9_CHARACTERS:
			return 'Nieprawidłowy numer telefonu.';
		}
	};

	const showSuccessAlert = () => {
		return toast.success('Zmiany zostały zastosowane!');
	};

	

	return (
		<DefaultLayout>
			<Modal isShown={isCareerPointModal} setIsShown={showCareerPointModal} />
			<div className='w-full h-full flex flex-col '>
				<AvatarCard name={user?.userData?.name} />
				<div className='w-full flex mt-6'>
					<Card className={'w-2/6 mr-6 p-7'} title={'Podstawowe informacje'} >
						<div className='w-full flex flex-col mt-6'>
							<FormInput placeholder={'Imię i nazwisko'} type={'text'} value={name} onChange={handleNameInput}/>
							<FormInput placeholder={'Adres email'} type={'text'} value={user.email} onChange={() => {}} disabled />
							<FormInput placeholder={'Numer telefonu'} type={'text'} value={phoneNumber} onChange={handlePhoneNumberInput} isError={errors.includes(userEditErrors.PHONE_NUMBER_MUST_BE_LONGER_THAN_OR_EQUAL_TO_9_CHARACTERS)} errorMessage={translateErrorsMessage()}/>
							<FormInput placeholder={'Lokalizacja'} type={'text'} value={localization} onChange={handleLocalizationInput}/>
							<PrimaryButton className={'bg-primary hover:scale-102'} title={'Zapisz'} onClick={updateUserData}/>
						</div>
					</Card>
					<Card className={'w-4/6 p-7'} title={'Punkty kariery'} >
						<div className='mt-6 flex w-full'>
							<CareerPointCard onClick={showCareerPointModal} dateFrom={'04.2020'} dateTo={'12.2021'} subtitle={'ITCompany Itd'} title={'React Developer'} img={'data:image/png;base64,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'} />
							<CareerPointCard dateFrom={'04.2020'} dateTo={'12.2021'} subtitle={'ITCompany Itd'} title={'React Developer'} img={'data:image/png;base64,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'} />
							<CareerPointCard dateFrom={'04.2020'} dateTo={'12.2021'} subtitle={'ITCompany Itd'} title={'React Developer'} img={'data:image/png;base64,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'} />
						</div>
						<div className='w-full flex justify-end mt-3'>
							<PrimaryButton className={'bg-primary hover:scale-110'} title={'Zapisz'} />
						</div>

					</Card>
				</div>
				<Card className='w-full mt-6 p-7' title={'Prywatność i zgody'}>
					<div className='w-full flex flex-col mt-6'>
						<ToggleButtonWithText title={'Zgoda na otrzymywanie powiadomień od innych użytkowników'} subtitle={'Inni użytkownicy mogą zaprosić Cię do swojej sieci'} />
						<ToggleButtonWithText title={'Zgoda na otrzymywanie powiadomień od innych użytkowników'} subtitle={'Inni użytkownicy mogą zaprosić Cię do swojej sieci'}/>
						<ToggleButtonWithText title={'Zgoda na otrzymywanie powiadomień od innych użytkowników'} subtitle={'Inni użytkownicy mogą zaprosić Cię do swojej sieci'}/>
						<ToggleButtonWithText title={'Zgoda na otrzymywanie powiadomień od innych użytkowników'} subtitle={'Inni użytkownicy mogą zaprosić Cię do swojej sieci'}/>
				
					</div>
					<div className='flex w-full justify-between items-end mt-6'>
						<div className='flex items-center'>
							<i className='bx bx-info-circle text-sm font-medium mr-2' />
							<p className='text-xs font-medium'>Informacje o przetwarzaniu danych</p>
						</div>
						<PrimaryButton className={'bg-primary hover:scale-102'} title={'Zapisz'} />
					</div>

				</Card>
			</div>
		</DefaultLayout>
	);
};
