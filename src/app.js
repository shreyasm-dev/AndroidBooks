const {
  contentView,
  WebView,
} = require('tabris');

WebView({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  url: 'https://www.shreyasm.dev/books.html',
}).appendTo(contentView);
