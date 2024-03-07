const country = 'in'; 
const apiKey = '74234f2e15444d4b88179f7ecb54d5cb'; 
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

const newsContainer = document.getElementById('news-container');

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const articles = data.articles.slice(0, 6);
        articles.forEach(article => {
            const { title, description, url } = article;
            const articleElement = document.createElement('div');
            articleElement.classList.add('card');
            articleElement.innerHTML = `
                <h2><a href="${url}" target="_blank">${title}</a></h2>
                <p>${description}</p>
            `;
            newsContainer.appendChild(articleElement);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
