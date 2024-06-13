const articlesDiv = document.getElementById("articles");

async function fetchArticles() {
  try {
    const url = './health_article.json';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: $(response.status)`);
    }

    const data = await response.json();
    console.log(data);

    // checking for articles

    if (data && data.articles && data.articles.length > 0) {
      articlesDiv.innerHTML = '';

      data.articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        const title = document.createElement('h2');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        // ways to achieve
        const waysHeader = document.createElement('h3');
        waysHeader.textContent = "Ways to Achieve";

        const waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(way => {
          const listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });

        // Benefits
        const benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = "Benefits";

        const benefitsList = document.createElement('ul');
        article.benefits.forEach(benefit => {
          const listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
      });
    } else {
      console.warn('No articles founs in the response data.');
      // Handling empty data scenario (display a message)
      const noArticleMessage = document.createElement('p');
      noArticleMessage.textContent = "No Articles found.";
      articlesDiv.appendChild(noArticleMessage);
    }

  } catch (error) {
    console.error('Error fetching articles:', error);
    const errorMessage = document.createElement('p');
    errorMessage.textContent = "Failed to load articles. Please try again later.";
    articlesDiv.appendChild(errorMessage);
  }
}

fetchArticles();