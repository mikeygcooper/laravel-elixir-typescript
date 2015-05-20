laravel-elixir-typescript
========================

## Usage
A simple [gulp-typescript](https://github.com/ivogabe/gulp-typescript) wrapper ingredient for Laravel Elixir.

Add it to your Elixir-enhanced Gulpfile, like so:

```
var elixir = require('laravel-elixir');

require('laravel-elixir-typescript');

elixir(function(mix) {
  mix.typescript('app.js');
});
```

This will compile your `resources/assets/typescript/index.ts` file.

If you'd like to output to a different directory than the default `public/js`, then you may override this as well.

```
mix.typescript('app.js', 'public/js/foo/bar');
```
