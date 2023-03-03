const title = document.querySelector("#title-input");
const inputType = document.querySelector("select");
const composeArea = document.querySelector(".compose-area");
const addBtn = document.querySelector('#add-btn');
const preview = document.querySelector('#preview');
const submit = document.querySelector('#submit');

// Set up function to create HTML element from string
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

submit.addEventListener('click', (e) => {
    e.preventDefault();

    let title = document.querySelector('#title-input').value;

    if (!title) {
        title = 'Untitled';
    }
    
    let data = {};
    // let formData = new FormData();
    // formData.append('title', title);
    let formData = [];
    const allElements = preview.children;

    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].classList.contains('paragraph-preview')) {
            formData.push({
                type: 'paragraph',
                content: allElements[i].value
            });
        }
        else if (allElements[i].classList.contains('subtitle-preview')) {
            formData.push({
                type: 'subtitle',
                content: allElements[i].value
            });
        }
        else if (allElements[i].classList.contains('quote-preview')) {

            const content = {
                text: allElements[i].children[1].value
            };

            if (allElements[i].children[2].children[0].value) {
                content.author = allElements[i].children[2].children[0].value;
            }

            if (allElements[i].children[2].children[2].value) {
                content.source = allElements[i].children[2].children[2].value;
            }

            formData.push({
                type: 'quote',
                content: content
            });
        }
    }

    data.title = title;
    data.data = formData;

    fetch('/api/compose', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    setTimeout(() => {window.location.replace("/learn");}, 0000);
})

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const type = inputType.value;

    if (type === 'paragraph' && document.querySelector('#paragraph-input textarea').value) {
        const newParaElement = htmlToElement(`<textarea class="paragraph-preview" rows="1">${document.querySelector('#paragraph-input textarea').value}</textarea>`);

        preview.appendChild(newParaElement);

        newParaElement.style.height = '1rem';
        newParaElement.style.height = newParaElement.scrollHeight + 'px';

        document.querySelector('#paragraph-input textarea').value = '';
        document.querySelector('#paragraph-input textarea').style.height = 'auto';
    }
    else if (type === 'subtitle' && document.querySelector('#subtitle-input textarea').value) {
        const newSubtElement = htmlToElement(`<textarea class="subtitle-preview" rows="1">${document.querySelector('#subtitle-input textarea').value}</textarea>`);

        preview.appendChild(newSubtElement);

        newSubtElement.style.height = '1rem';
        newSubtElement.style.height = newSubtElement.scrollHeight + 'px';

        document.querySelector('#subtitle-input textarea').value = '';
        document.querySelector('#subtitle-input textarea').style.height = 'auto';
    }
    else if (type === 'quote' && document.querySelector('#quote-input').children[0].value) {
        const quote = document.querySelector('#quote-input');

        const newQuoteElement = htmlToElement(`
        <div class="quote-preview">
          <i class="fa-solid fa-quote-left fa-2xl"></i>
          <textarea type="text" class="quote-preview-text" rows="1">${quote.children[0].value}</textarea>
          <div class="quote-author-source">
            <input type="text" class="quote-preview-author" placeholder="Author">
            <p class="sep">,</p>
            <input type="text" class="quote-preview-source" placeholder="Source Name">
            <p class="sep">.</p>
          </div>
        </div>`);

        if (quote.children[1].value) {
            newQuoteElement.children[2].children[0].value = quote.children[1].value;
            newQuoteElement.children[2].children[0].style.width = newQuoteElement.children[2].children[0].value.length + 'ch';
        }

        if (quote.children[2].value) {
            newQuoteElement.children[2].children[2].value = quote.children[2].value;
            newQuoteElement.children[2].children[2].style.width = newQuoteElement.children[2].children[2].value.length + 'ch';
        }

        preview.appendChild(newQuoteElement);

        newQuoteElement.children[1].style.height = 'auto';
        newQuoteElement.children[1].style.height = newQuoteElement.children[1].scrollHeight + 'px';

        quote.children[0].value = '';
        quote.children[1].value = '';
        quote.children[2].value = '';

        quote.children[0].style.height = 'auto';
    }
});

inputType.addEventListener('change', (e) => {
    const newType = inputType.value;

    document.querySelector(`.display`).classList.add('hidden');
    document.querySelector(`.display`).classList.remove('display');
    document.querySelector(`#${newType}-input`).classList.add('display');
    document.querySelector(`#${newType}-input`).classList.remove('hidden');

});

composeArea.addEventListener('keydown', (e) => {
    const target = e.target;

    if (target.tagName === 'TEXTAREA') {

        if (target.id === 'title-input') {
            target.style.width = Math.max(target.value.length, 25) + 'ch';
        }

        target.style.height = 'auto';
        target.style.height = target.scrollHeight + 'px';
    }
    else if (target.classList.contains('quote-preview-source') || target.classList.contains('quote-preview-author')) {
        target.style.width = target.value.length + 'ch';
    }

    if (e.key === 'Backspace') {
        setTimeout(() => {
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
        }, 0000);
    }
});

composeArea.addEventListener('paste', (e) => {
    const target = e.target;

    if (target.tagName === 'TEXTAREA') {

        if (target.id === 'title-input') {
            target.style.width = Math.max(target.value.length, 25) + 'ch';
        }

        setTimeout(() => {
            target.style.height = 'auto';
            target.style.height = target.scrollHeight + 'px';
        }, 0000);
    }
    else if (target.classList.contains('quote-preview-source') || target.classList.contains('quote-preview-author')) {
        target.style.width = target.value.length + 'ch';
    }
});