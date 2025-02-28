const url = "https://anapioficeandfire.com/api/books/";

const app = $("#books").css({
  paddingLeft: "0px",
});
const loading = $("#loading");

const addBookToDOM = (item) => {
  console.log(item);

  const element = $("<div>").css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  });

  const title = $("<h2>").text(item.name);
  const author = $("<p>").text(`by ${item.authors[0]}`);
  const published = $("<p>").text(item.released.substr(0, 4));
  const pages = $("<p>").text(`${item.numberOfPages} pages`);

  title.appendTo(element);
  author.appendTo(element);
  published.appendTo(element);
  pages.appendTo(element);
  element.appendTo(app);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      const li = $("<li>").text(`An error occured. Please try again.`);
      li.appendTo(app);
    })
    .finally(() => {
      loading.remove();
    });
};

fetchData(url);
