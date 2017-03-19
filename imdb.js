window.imdb$foo = function (list) {
  /* ... */
};
jQuery.getScript('http://sg.media-imdb.com/suggests/f/foo.json');

// Using jQuery.ajax (let jQuery handle the callback)
jQuery.ajax({
    url: 'http://sg.media-imdb.com/suggests/f/foo.json',
    dataType: 'jsonp',
    cache: true,
    jsonp: false,
    jsonpCallback: 'imdb$foo'
}).done(function (result) {
    /* ... */
});

// With local proxy to a PHP script replacing imdb$foo with a sanitized
// version of $_GET['callback'] (http://stackoverflow.com/a/8811412/319266)
jQuery.getJSON('./imdb.php?q=foo&callback=?', function (list) {
    /* ... */
});