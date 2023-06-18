/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily :{
      'pop' : ['Poppins','sans-serif'],
    }, fontWeight: {
      thin: '100',
      hairline: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      'extra-bold': '800',
      black: '900',
    },
    extend: {
      colors: {
        'lg': '#1E1E1E',
        'bg1': '#011139',
        'bg2': '#06326C',
        'btn': '#007DFA',
        'wht': '#FFFFFF',
        'txt': '#BEBEBF',
      }, 
    },
  },
  plugins: [],
}

