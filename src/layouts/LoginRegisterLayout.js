import React from 'react';


const LoginRegisterLayout = ({children}) => {
	return (
		<div className='h-screen w-screen flex'>
			<div className='h-3/4 w-9/12 bg-pink-200 flex m-auto'>
				<div style={{backgroundImage: 'url(/assets/background-img.jpg)'}}
					className='bg-cover bg-no-repeat bg-center w-8/12 h-full'>

				</div>
				<div>
					{children}
				</div>
			</div>
		</div>
	);
};

export default LoginRegisterLayout;
