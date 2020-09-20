const mix = require('laravel-mix');
const ora = require('ora')
require('laravel-mix-merge-manifest');

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

var spinner = ora('Building assets...')
spinner.start()

mix.config.fileLoaderDirs.fonts = 'src/fonts';
mix.config.fileLoaderDirs.images = 'src/img';

// Assets build
mix.js('resources/js/app.js', 'src/js')
  .extract(['jquery', 'lodash', 'svg.js', 'jquery-validation', 'slick-carousel', 'sweetalert2'], 'src/js/vendor.js')
  .sass('resources/sass/vendor.scss', 'src/css')
  .sass('resources/sass/app.scss', 'src/css/styles.css')
  .sourceMaps()
  .mergeManifest()
  .then(function () {
    spinner.stop()
  });
