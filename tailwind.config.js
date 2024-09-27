/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: "Poppins", // Poppins font - to implement - font-poppins
            lato: "Lato",
         },
      },
   },
   plugins: [],
};
