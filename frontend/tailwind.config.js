/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				mainColor: '#0EA5E9',
			},
			// keyframes: {
			// 	colorChange: {
			// 		'0%': { color: '#0EA5E9' } /* Màu ban đầu */,
			// 		'25%': { color: '#fff' } /* Màu chuyển đổi giữa */,
			// 		'50%': { color: '#0EA5E9' } /* Màu chuyển đổi giữa */,
			// 		'75%': { color: '#fff' } /* Màu chuyển đổi giữa */,
			// 		'100%': { color: '#0EA5E9' } /* Màu cuối */,
			// 	},
			// },
			// animation: {
			// 	'dynamic-color': 'colorChange 1s linear infinite',
			// },
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
