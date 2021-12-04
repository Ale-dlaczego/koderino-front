import React from 'react';

const LoginRegisterLayout = ({children}) => {
	return (
		<div className='h-screen w-screen flex bg-white'>
			<div className='h-full md:h-auto w-full md:w-3/4 lg:w-3/4 xl:w-1/2 flex flex-col md:flex-row  m-auto shadow-2xl bg-our-blue-light md:rounded-2xl'>
				<div style={{backgroundImage: 'url(/assets/background-img.jpeg)'}}
					className='bg-cover bg-no-repeat bg-center h-full md:h-auto w-full md:w-1/2 shadow-lg m-0 md:m-6 mr-0 md:rounded-2xl' />
				<div className='p-10 w-full xl:w-2/3 2xl:w-1/2 '>
					{children}
				</div>
			</div>
		</div>
	);
};

export default LoginRegisterLayout;
