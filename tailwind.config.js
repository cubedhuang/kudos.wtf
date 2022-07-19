/** @type {import("tailwindcss").Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				heading: ["Caveat", "cursive"],
				body: ["Mali", "sans-serif"]
			}
		}
	},
	plugins: []
};
