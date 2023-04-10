// array for storing the books
const myLibrary = [
  {
    title: "First Book",
    author: "Tokie Junior",
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

// update the UI with the book object passed as argument
function updateUI(item) {
  const title = document.createTextNode(item.title);
  const author = document.createTextNode(item.author);
  const pages = document.createTextNode(`${item.pages} Pages`);
  const isRead = document.createTextNode(
    item.isRead ? "Read ✅" : "Not Read ❌"
  );

  const div = document.createElement("div");
  div.classList.add("card-book");
  div.setAttribute("arrayIndex", myLibrary.indexOf(item));

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

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("id", "deleteBook");
  // Remove book from UI and Library Array
  deleteButton.addEventListener("click", (e) => {
    const bookIndex = e.target.parentNode.getAttribute("arrayindex");
    e.target.parentNode.remove();
    myLibrary.splice(bookIndex, 1);
    const cardChildren = cardContainer.children;
    for (let i = 0; i < cardChildren.length; i += 1) {
      const child = cardChildren[i];
      child.setAttribute("arrayIndex", i);
    }
  });
  deleteButton.append("Delete");
  div.append(deleteButton);

  cardContainer.append(div);
}

// loop on array of objects and create cards
function displayLibrary() {
  Object.values(myLibrary).forEach((i) => {
    updateUI(i);
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

// Get data from newBook form/input and update UI
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

  // update the UI with the new book on the array
  const lastItem = myLibrary[myLibrary.length - 1];
  updateUI(lastItem);

  // reset form for the next book
  newBookForm.reset();
});
