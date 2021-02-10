const {
  Button, TextView, AlertDialog, contentView,
} = require('tabris');

const textView = new TextView({
  centerX: true,
  top: 'prev() 50',
  font: '24px',
}).appendTo(contentView);

new Button({
  centerX: true,
  top: 100,
  text: 'Show message',
}).onSelect(() => {
  textView.text = 'Tabris.js rocks!';
  AlertDialog.open('Comment saved').onClose.promise();
}).appendTo(contentView);
