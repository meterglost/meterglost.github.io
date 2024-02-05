/** @type {import("prettier").Config} */
export default {
	trailingComma: "es5",
	printWidth: 200,
	tabWidth: 4,
	useTabs: true,
	singleQuote: false,

	plugins: ["prettier-plugin-astro"],

	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
		{
			files: "*.{yml,yaml}",
			options: {
				tabWidth: 2,
			},
		},
	],
};
