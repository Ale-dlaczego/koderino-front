module.exports = {
	darkMode: false,
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
				'page-bg': '#EEEEEE'
			},
			width: {
				'150': '150px',
				'350': '350px'
			},
			height: {
				'150': '150px'
			},
			borderRadius: {
				'half': '50%'
			},
			fontSize: {
				'xxs': '9px'
			}
		}
	},
	variants: {
		extend: {
			fontWeight: ['hover']
		},
	},
	plugins: [],
};
