import React from 'react';

const LoginRegisterLayout = ({children}) => {
	return (
		<div className='h-screen w-screen flex ' style={{backgroundColor: '#3C5260'}}>
			<div className='h-3/4 container flex m-auto shadow-3xl'>
				<div style={{backgroundImage: 'url(/assets/background-img.jpeg)', backgroundColor: '#D7D7D5'}}
					className='bg-cover bg-no-repeat bg-center w-8/12 h-full shadow-2xl' />
				<div className='p-10'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default LoginRegisterLayout;
