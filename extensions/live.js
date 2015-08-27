(function(document, $, undefined) {

/**
 * Provede daný callback na document a pak na každý snippet při nette ajaxu.
 * Depends on 'snippets' extension
 *
 * @param function($el) {} callback jemuž je jako první parametr předán document nebo snippet.
 */
$.nette.ext('live', {
}, {
	before: function (callback) {
		this.ext('snippets').before($.proxy(function ($el) {
			callback($el);
		}, this));
		return this;
	},
	after: function (callback) {
		this.ext('snippets').after($.proxy(function ($el) {
			callback($el);
		}, this));
		callback($(document));
		return this;
	},
	complete: function (callback) {
		this.ext('snippets').complete($.proxy(function ($el) {
			callback($el);
		}, this));
		callback($(document));
		return this;
	},
});

})(document, jQuery);
