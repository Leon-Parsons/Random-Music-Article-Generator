let displayImage = document.getElementById("a-image");
let displayTitle = document.getElementById("a-title");
let displayAuthor = document.getElementById("a-author");
let displayText = document.getElementById("a-text");
let displayUrl = document.getElementById("a-url");
let articleLink = document.getElementById("a-link");


//Apply functionality for next article button
let nextButton = document.getElementById("next-a-btn").addEventListener("click",getArticle);

const SECRET_API_KEY = '//REPLACE WITH API KEY SOURCED FROM https://newsapi.org/register'
//API url sorted by music, latest published and english
const url = 'https://newsapi.org/v2/everything?q=music&sortBy=publishedAt&language=en&apiKey=' + SECRET_API_KEY;

//Updates HTML elements with currently generated article 
function getArticle() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      randNum = Math.floor(Math.random() * data.articles.length + 1);
      let article = data.articles[randNum];
      console.log(article);
        displayImage.innerHTML = `<img src=${article.urlToImage} alt="sorry, image unavailable">`;
        displayTitle.innerHTML = article.title;
        displayAuthor.innerHTML = article.author;
        displayText.innerHTML = article.content;
        articleLink.href= article.url;
    })
    .catch(error => console.error(error));
}

getArticle();

