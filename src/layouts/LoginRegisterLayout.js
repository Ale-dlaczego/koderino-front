import React from 'react';

const LoginRegisterLayout = ({children}) => {
	return (
		<div className='h-screen w-screen flex bg-white'>
			<div className='h-1/2 w-1/2 flex m-auto shadow-2xl'>
				<div style={{backgroundImage: 'url(/assets/background-img.jpeg)'}}
					className='bg-cover bg-no-repeat bg-center w-1/2 h-full shadow-2xl bg' />
				<div className='p-10 w-1/2 bg-our-blue-light form'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default LoginRegisterLayout;
