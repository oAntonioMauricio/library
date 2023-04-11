# Book Library Project
This is a simple web app that allows you to store and manage your book library. You can add, delete, and update the status of your books. This project is implemented in JavaScript and uses HTML and CSS for the user interface.

## How to Use
To use the app, simply open index.html in your web browser. You will be presented with a list of books that are currently in your library. You can add new books by clicking the "Add New Book" button and filling out the form. Once you submit the form, the new book will be added to your library.

To delete a book from your library, click the "Delete" button next to the book you want to remove. You will be prompted to confirm the deletion before the book is removed from your library.

To update the status of a book, click the "Update" button next to the book you want to modify. The status will be toggled between "Read" and "Not Read".

## Implementation Details
The app uses an array of objects to store the books in the library. Each book is represented by an object with the following properties:

* title: the title of the book (string)
* author: the author of the book (string)
* pages: the number of pages in the book (number)
* isRead: whether the book has been read or not (boolean)

The app uses a Book constructor function to create new book objects. The updateUI function is used to update the user interface with the book data. The displayLibrary function is used to loop over the array of books and create a card for each book.

The app also includes a modal dialog for adding new books to the library. The modal is implemented using HTML and CSS. The JavaScript code listens for events on the modal and updates the library array and UI accordingly.