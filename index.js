var gulp = require('gulp');
var elixir = require('laravel-elixir');
var plugins = require('gulp-load-plugins')();
var utilities = require('laravel-elixir/ingredients/commands/Utilities');
var Notification = require('laravel-elixir/ingredients/commands/Notification');
var ts = require('gulp-typescript');
var concat = require('gulp-concat');
var _ = require('underscore');

var inProduction = elixir.config.production;

elixir.extend('typescript', function(src, output, options) {

    var pluginName = 'typescript';
    var search = '**/*.+(ts)';

    options = _.extend({
        sortOutput: true
    }, options);

    gulp.task(pluginName, function () {

        var gulpSrc = utilities.buildGulpSrc(
            src, elixir.config.assetsDir + 'typescript', search
        );

        var tsResults = gulpSrc
            .pipe(ts({
                options
            }));

        return tsResults
            .pipe(plugins.if(elixir.config.production, plugins.concat(output)))

        return plugins.gulpTypescript(gulpSrc, options)
            .pipe(gulp.dest(output || elixir.config.typescriptOutput))
            .pipe(new Notification().message('Typescript Compiled!'));
    });

    elixir.config.registerWatcher(
        pluginName,
        elixir.config.assetsDir + 'typescript' + '/' + search
    );

    return elixir.config.queueTask(pluginName);
});
