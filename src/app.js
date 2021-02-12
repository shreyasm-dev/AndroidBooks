const {
  AlertDialog,
  app,
  Button,
  CollectionView,
  Composite,
  contentView,
  NavigationView,
  Page,
  Tab,
  TabFolder,
  TextInput,
  TextView,
} = require('tabris');

const books = ['x'];

const tabFolder = new TabFolder({
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  tabBarLocation: 'bottom',
  background: 'white',
}).appendTo(contentView);

function createPage(navigationView, title, content) {
  const page = new Page({
    title,
    background: '#eeeeee',
  }).appendTo(navigationView);
  content(page);

  return page;
}

function createTab(title, image, content) {
  const tab = new Tab({ title, image })
    .appendTo(tabFolder);

  const navigationView = new NavigationView({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  }).appendTo(tab);
  createPage(navigationView, title, content);
}

const bookList = new CollectionView({
  left: 16,
  top: 16,
  right: 16,
  bottom: 0,
  itemCount: books.length,
  createCell: () => {
    const bookComposite = new Composite({
      left: 0,
      right: 0,
      top: 0,
    });

    const book = new TextInput().appendTo(bookComposite);
    // book.editable = false;

    return bookComposite;
  },
  updateCell: (view, index) => {
    view.text = books[index];
  },
});

createTab('Books', 'http://shreyasm.dev/bookmark-regular.png', (controls) => {
  bookList.appendTo(controls);
});

createTab('Add a Book', 'http://shreyasm.dev/plus-solid.png', (controls) => {
  new TextInput({
    left: 16,
    right: 16,
    top: 16,
    message: 'Name',
  }).appendTo(controls);

  new TextInput({
    left: 16,
    right: 16,
    top: 80,
    message: 'Author',
  }).appendTo(controls);

  new TextInput({
    left: 16,
    right: 16,
    top: 144,
    message: 'Date Published',
  }).appendTo(controls);

  new Button({
    left: 16,
    right: 16,
    top: 208,
    text: 'Save',
  })
    .onSelect(() => {
      books.push('x');
      console.log(window.location);
    })
    .appendTo(controls);
});

createTab('Filter and Sort', 'http://shreyasm.dev/filter-solid.png', () => { });

app.onBackNavigation((event) => {
  const navigationView = tabFolder.selection.find(NavigationView).only();
  const page = navigationView.pages().last();
  if (page !== undefined) {
    page.dispose();
    event.preventDefault();
  }
});
