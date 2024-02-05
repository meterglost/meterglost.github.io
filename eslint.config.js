import js from "eslint-plugin-jsdoc";

import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";

/** @type { import("eslint").Linter.FlatConfig[] } */
const config = [
	{
		files: ["**/*.js", "**/*.ts"],
		languageOptions: {
			parser: tsParser,
		},
		plugins: {
			ts,
			js,
		},
		rules: {
			...ts.configs["eslint-recommended"].rules,
			...ts.configs["recommended"].rules,
			...js.configs["flat/recommended"].rules,
		},
	},
	{
		files: ["**/*.astro"],
		languageOptions: {
			parser: astroParser,
			parserOptions: {
				parser: tsParser,
			},
		},
		plugins: {
			astro,
		},
		rules: {
			...astro.configs.recommended.rules,
		},
	},
];

export default config;
