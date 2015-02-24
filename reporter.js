///<reference path='../definitions/ref.d.ts'/>
var gutil = require('gulp-util');
var notifier = require('node-notifier');
function ElixirMessage(fullFilename) {
    return {
        error: function (error) {
            console.log(error.message);

            notifier.notify({
                'title': 'Laravel Elixir Typescript Error',
                icon: __dirname + '/../laravel-elixir/icons/fail.png',
                'message': 'Compile Error, check console log for details'
            });
        }
    };
}
exports.ElixirMessage = ElixirMessage;