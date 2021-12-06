import { Card } from '../global/Card';
import React from 'react';
import { UserAvatar } from '../global/UserAvatar';

export const AvatarCard = () => {
	return (
		<Card className={'relative mt-32 w-full'}>
			<UserAvatar className='w-150 h-150 border-2 border-black absolute -top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/3' img='https://cdn.i.haymarketmedia.asia/?n=asian-investor%2Fcontent%2FMichael+Han+-+Brightsphere+-+crop+landscape.jpg&h=570&w=855&q=100&v=20190520&c=1'/>
			<h2 className='text-center font-semibold text-lg mt-16 '>Andrzej Jarosławski</h2>
		</Card>
	);
};
