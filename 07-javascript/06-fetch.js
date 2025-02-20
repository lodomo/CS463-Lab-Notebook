const url = "https://anapioficeandfire.com/api/books/";

const createBookElement = (book) => {
  console.log(book);
  let element = document.createElement("div");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let date = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = `by ${book.authors[0]}`;
  date.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  element.classList.add("book");
  element.append(title);
  element.append(author);
  element.append(date);
  element.append(pages);

  return element;
};

const renderBooks = (bookData) => {
  const booksContainer = document.querySelector("#books");
  bookData.forEach((book) => {
    const bookElement = createBookElement(book);
    booksContainer.append(bookElement);
  });
  const loading = document.getElementById("loading");
  booksContainer.removeChild(loading);
};

const fetchData = async (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  let json = null;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    json = await response.json();
    console.log(json);
    renderBooks(json);
  } catch (error) {
    console.error(error.message);
  }

  return json;
};

fetchData(url);
