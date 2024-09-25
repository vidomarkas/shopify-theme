let mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

mix.js("src/js/app.js", "theme/assets")
	.sass("src/scss/app.scss", "theme/assets")
	.options({
		processCssUrls: false,
		postCss: [tailwindcss("tailwind.config.js")],
	});
