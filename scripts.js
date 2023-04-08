// array for storing the books
const myLibrary = [
  {
    title: "First book",
    author: "AMMM",
    pages: 76,
    isRead: true,
  },
  {
    title: "Second book",
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

// eslint-disable-next-line func-names
Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${
    this.isRead ? "yes" : "no"
  }`;
};

function addBookToLibrary(title, author, pages, isRead) {
  myLibrary.push(new Book(title, author, pages, isRead));
}

// define html elements
const cardContainer = document.getElementById("cardContainer");

// loop on array and create cards
Object.values(myLibrary).forEach((i) => {
  const title = document.createTextNode(i.title);
  const author = document.createTextNode(i.author);
  const pages = document.createTextNode(i.pages);
  const isRead = document.createTextNode(i.isRead ? "Yes" : "No");

  const div = document.createElement("div");
  div.classList.add("card-book");

  const h4 = document.createElement("h4");
  h4.append(title);
  div.append(h4);

  const pAuthor = document.createElement("p");
  pAuthor.append(author);
  div.append(pAuthor);

  const pPages = document.createElement("p");
  pPages.append(pages);
  div.append(pPages);

  const pRead = document.createElement("p");
  pRead.append(isRead);
  div.append(pRead);

  cardContainer.append(div);
});

// Open and Close Modal
const modalButton = document.getElementById("newBookModal");
const modal = document.getElementById("modalNewBook");
const overlay = document.getElementById("modalOverlay");

function openModal() {
  modal.classList.toggle("modalHidden");
  overlay.classList.toggle("modalHidden");
}

modalButton.addEventListener("click", openModal);
overlay.addEventListener("click", openModal);
