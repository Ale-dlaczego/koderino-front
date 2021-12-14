module.exports = {
	content: [
		'./src/**/*.{js,jsx}',
	],
	darkMode: false,
	important: true,
	theme: {
		fontFamily: {
			'sans': ['Poppins']
		},
		extend: {
			colors: {
				'our-blue': {
					light: '#C0D6E1',
					DEFAULT: '#3C5260',
				},
				primary: '#68C4B4',
				secondary: '#4FA39C',
				'orange': '#E9610B',
				'page-bg': '#EEEEEE',
				'primary-pale': 'rgba(104,196,180, 0.3)',
				'modal-bg': 'rgba(243, 244, 246, 0.7)',
				'transparent-gray': 'rgba(229, 231, 235, 0.6)',
			},
			width: {
				'150': '150px',
				'350': '350px',
				'425': '425px'
			},
			height: {
				'150': '150px'
			},
			borderRadius: {
				'half': '50%'
			},
			fontSize: {
				'xxs': '9px'
			},
			scale: {
				'102': '102%'
			}
		
		}
	},
	variants: {
		extend: {
			fontWeight: ['hover'],
		
			
		},
		scrollbar: ['rounded']
		
		
	},
	plugins: [
		
	],
};
