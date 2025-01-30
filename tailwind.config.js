/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#aff1f7", //nave
          "secondary": "#111",  // text
          "base-300" :"#f0f8ff", //Contributor
          "base-100": "#f0f8ff", // footer
          "info":"#c0c0c0",      //card side //banner //allCamp
          "neutral": "#e0f0ff",  // card 
          "base-200": "#ffffff", // main
          "success" : "#fdf5e6",  // runningCampaign
          "warning" : "#dcdcdc",
        },
        dark: {
          "primary": "#1b1b1b", // navbg
          "secondary": "#fff", // text 
          "base-300" :"#383838", //Contributor
          "neutral": "#3d4451", // card // banner //allCamp
          "base-100": "#111212", // footer
          "base-200": "#100c08", // main
          "info":"#1a2421",   //card side //banner 
          "success" : "#383838", // running Campaign
          "warning" : "#343434"
        },
      },
    ],
  },
  plugins: [
    require( 'daisyui' ),
  ],
}

