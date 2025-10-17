import { defineConfig } from "@rsbuild/core";
import { pluginBabel } from "@rsbuild/plugin-babel";
import { pluginSolid } from "@rsbuild/plugin-solid";

export default defineConfig({
	html: {
		title: "Meterglost's Profile",
		meta: {
			description: "Meterglost's Profile",
		},
		crossorigin: "anonymous",
	},
	tools: {
		postcss: (_opts, { addPlugins }) => {
			addPlugins(require("@tailwindcss/postcss"));
		},
	},
	plugins: [
		pluginBabel({
			include: /\.(?:jsx|tsx)$/,
		}),
		pluginSolid(),
	],
	dev: {
		watchFiles: [
			{
				paths: "./src/**/*",
				type: "reload-server",
				options: {
					usePolling: process.env.DEVCONTAINER === "true",
				},
			},
		],
	},
	resolve: {
		alias: {
			"@/": "./src",
		},
	},
});
