// array for storing the books
const myLibrary = [
  {
    title: "first book",
    author: "AMMM",
    pages: 76,
    isRead: true,
  },
  {
    title: "second book",
    author: "RL",
    pages: 25,
    isRead: false,
  },
];

function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.isRead ? "yes" : "no"
  }`;
};

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary.push(new Book(title, author, pages, isRead));
}
