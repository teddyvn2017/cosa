/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'mau_xanh': '#22376e',
        'mau_xanh_100':'#BAC1D2',
        'mau_xanh_300': '#6A799D',
        'mau_xanh_400':'#4D5F8A',
        'mau_do': '#e23b32',
        'mau_trang': '#fff',
        'mau_xam':'eaebf0',
        'mau_hong': '#fcecec',
      },

      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
        
      },

      backgroundImage: {
        'hero-pattern': "url('./img/hero-pattern.jpg')",
        'top-destination': "url('./img/bg_top_destinations.png')"
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      container: {
        center: true,
        padding: "1.5rem",//tuong đương với <div class="container p-4 mx-auto"></div>
      },
      
      screens: {
        'xs': '475px',
        'sm': '576px',
        
      },

    },

    
  },
  plugins: [],
}

