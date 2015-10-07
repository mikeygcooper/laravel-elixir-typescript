var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var Notification = require('laravel-elixir/Notification');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var _ = require('underscore');

// Laravel Elixir Reporter
var _laravelReporter = require('./reporter');

var Task = Elixir.Task;

Elixir.extend('typescript', function (output, dest, options) {

    var pluginName = 'typescript';
    var search = '**/*.+(ts)';

    options = _.extend({
        sortOutput: true
    }, options);

    new Task(pluginName, function () {
        var tsResult = gulp.src('./resources/assets/typescript/**/*.ts')
            .pipe(ts(options, undefined, _laravelReporter.ElixirMessage()));
        return tsResult
            .pipe(concat(output))
            .pipe(gulp.dest(dest || './public/js'));
    })
        .watch(Elixir.config.assetsDir + 'typescript' + '/' + search);
});
