var gulp = require('gulp');
var elixir = require('laravel-elixir');
var Notification = require('laravel-elixir/ingredients/commands/Notification');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var _ = require('underscore');

var inProduction = elixir.config.production;

elixir.extend('typescript', function(output, dest, options) {

    var pluginName = 'typescript';
    var search = '**/*.+(ts)';

    options = _.extend({
        sortOutput: true
    }, options);

    gulp.task(pluginName, function () {
        var tsResult = gulp.src('./resources/assets/typescript/**/*.ts')
            .pipe(ts(options));

        return tsResult
            .pipe(concat(output))
            .pipe(gulp.dest(dest || './public/js'))
            .pipe(new Notification().message('Typescript Compiled!'));
    });

    elixir.config.registerWatcher(
        pluginName,
        elixir.config.assetsDir + 'typescript' + '/' + search
    );

    return elixir.config.queueTask(pluginName);
});
