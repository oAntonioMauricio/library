// array for storing the books
const myLibrary = [
  {
    title: "First book",
    author: "AMMM",
    pages: 76,
    isRead: true,
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
function displayLibrary() {
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
}

displayLibrary();

// Open and Close Modal
const modalButton = document.getElementById("newBookModal");
const modal = document.getElementById("modalNewBook");
const overlay = document.getElementById("modalOverlay");
const closeButton = document.getElementById("btnClose");

function openModal() {
  modal.classList.toggle("modalHidden");
  overlay.classList.toggle("modalHidden");
}

modalButton.addEventListener("click", openModal);
overlay.addEventListener("click", openModal);
closeButton.addEventListener("click", openModal);

// Get data from newBook input
const newBookForm = document.getElementById("newBookForm");

newBookForm.addEventListener("submit", (e) => {
  // prevent sending to backend
  e.preventDefault();

  // get value from input
  const bookTitle = document.getElementById("book_title");
  const bookAuthor = document.getElementById("book_author");
  const bookPages = document.getElementById("book_pages");
  const bookIsRead = document.querySelector('input[name="isRead"]:checked');

  // close the modal
  openModal();

  // update the array
  addBookToLibrary(
    bookTitle.value,
    bookAuthor.value,
    Number(bookPages.value),
    bookIsRead.value === "true"
  );

  // update the UI
  function updateLibrary() {
    const lastItem = myLibrary[myLibrary.length - 1];

    const title = document.createTextNode(lastItem.title);
    const author = document.createTextNode(lastItem.author);
    const pages = document.createTextNode(lastItem.pages);
    const isRead = document.createTextNode(lastItem.isRead ? "Yes" : "No");

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
  }

  updateLibrary();
});
