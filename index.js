const country = 'in'; 
const apiKey = '74234f2e15444d4b88179f7ecb54d5cb'; 
const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;

const newsContainer = document.getElementById('news-container');

const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            const articles = data.articles.slice(0, 6);
            articles.forEach(article => {
                const { title, description, url } = article;
                const articleElement = document.createElement('div');
                articleElement.classList.add('card');
                articleElement.innerHTML = `
                    <div class="card-body">
                        <h2 class="card-title"><a href="${url}" target="_blank">${title}</a></h2>
                        <p class="card-text">${description}</p>
                    </div>
                `;
                newsContainer.appendChild(articleElement);
            });
        } else {
            console.error('Request failed. Status:', xhr.status);
        }
    }
};
xhr.send();
