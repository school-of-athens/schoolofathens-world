const album = document.querySelector('#display-articles');
let articlesList = [];

function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};


// Get Data
const renderPage = async () => {
    await fetch("/api/getArticles")
        .then((response) => {
            return response.json();  // what is resolved is still a promise
        })
        .then((data) => {
            articlesList = data.articlesList;  // now we get the actual data
        });

    for (let i = 0; i < articlesList.length; i++) {
        const newArticle = htmlToElement(`
                <div class="col">
                    <div class="card shadow-sm">
                        <img class="card-img-top" src="images/Athens.jpg" width="300" height="225" style="object-fit: cover;">
                        <div class="card-body">
                            <p class="card-text">${articlesList[i].title}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <small class="text-muted">
                                    publish date is not available
                                </small>
                                <div class="btn-group">
                                    <a style="font-size: 1rem !important;" href="/learn/${articlesList[i].id}" class="btn btn-sm btn-outline-secondary">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `);

        album.appendChild(newArticle);
    }
}

renderPage();




