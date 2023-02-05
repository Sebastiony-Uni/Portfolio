/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "default": "url('/src/images/background.svg')",
        "mac": "url('/src/images/macbackground.svg')",
      }),
      colors: {
        "primary": '#413CCA',
        "secondary": '#D4EF8E',
      },
      fontFamily: {
        "robotoslab": ['roboto-slab', 'sans-serif']
      },
    },
    
  },
  plugins: [],
}
