const path = require('path')
const mix = require('laravel-mix')
const cssImport = require('postcss-import')
const cssNesting = require('postcss-nesting')
const browserSync = require("browser-sync")

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .vue({ runtimeOnly: true })
    .alias({ '@': 'resources/js' })
    .postCss('resources/css/app.css', 'public/css', [
        // prettier-ignore
        cssImport(),
        cssNesting(),
        require('tailwindcss'),
    ])
    .version()
    .sourceMaps()
    .browserSync('http://localhost:8000/')