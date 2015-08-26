# nette.ajax.js extensions from ADT

#### Dependencies

1) [nette.ajax.js](https://github.com/vojtech-dobes/nette.ajax.js)

## Installation

The best way to install is using [Bower](http://bower.io/).

```
$ bower install adt-nette-ajax --save
```

Link file with desired extensions in your templates (usually in `app/@layout.latte`, after `nette.ajax.js`).

## Usage

### Live

Runs your callback multiple times. First immediatelly and then `before`/`after`/`complete` each nette.ajax snippet processing. In `$el` variable is either `$(document)` (in case of first immediate call) or snippet. Callback is not run immediatelly in case of `before`, because it does not make sense.

You should use only `$el.find('#my-element')` to address HTML nodes in given snippet (or in document in case of first immediate call). Do not use general query `$('#my-element')` if you don't really know what you are doing.

```
$.nette.ext('live').after(function($el){ ... });
$.nette.ext('live').before(function($el){ ... });
$.nette.ext('live').complete(function($el){ ... });
```
