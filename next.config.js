const withPreact = require("next-plugin-preact");

/** @type {import("next").NextConfig} */
const nextConfig = {
	i18n: {
		locales: ["en"],
		defaultLocale: "en"
	},
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		images: {
			allowFutureImage: true
		}
	}
};

module.exports = withPreact(nextConfig);
