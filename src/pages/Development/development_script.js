
const todoBtn = document.querySelector("#todo-add-btn");
const logBtn = document.querySelector('#log-add-btn');
const todoList = document.querySelector('#todo-list');
const logList = document.querySelector('#log-list');

// Set up function to create HTML element from string
function htmlToElement(html) {
    var template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
};

// Get data from server
fetch("/api/devData")
    .then((response) => {
        return response.json();  // what is resolved is still a promise
    })
    .then((data) => {
        const { todoData, logData } = data;

        todoData.forEach((item) => {
            todoList.append(htmlToElement(`
                <div class="list-item" id="${item.id}">
                    <p>
                        <span class="todo-task">${item.task}</span>
                        <a class="todo-link" href="${item.link}">Link</a>
                    </p>
                    <div class="button-group">
                        <button type="button" class="btn btn-primary edit-btn" disabled>Edit</button>
                        <button type="button" class="btn btn-danger delete-btn">Delete</button>
                    </div>
                </div>
            `));
        });

        logData.forEach((item) => {
            logList.append(htmlToElement(`
                <div class="list-item" id="${item.id}">
                    <p class="log-date">${item.date}</p>
                    <p class="log-event">${item.event}</p>
                </div>
            `));
        });
    });

// Delete todo item if button clicked
todoList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {

        fetch('/api/devData/todo', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({id: e.target.parentElement.parentElement.id})
        });

        e.target.parentElement.parentElement.remove();
    }
});

// Configure add todo item
todoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodoItem = htmlToElement(`<div class="list-item">
        <div class= "new-item-input">
            <input type="text" class="todo-task-input" placeholder="Type new todo item" onkeydown='this.style.width = this.value.length + "ch";'>
            <input type="text" class="todo-link-input" placeholder="Add any link" onkeydown='this.style.width = this.value.length + "ch";'>
            </div>

            <button type="button" class="btn btn-primary save-new-todo">Save</button>
        </div>`
    );
    todoList.append(newTodoItem);

    const saveNewTodo = document.querySelector('.save-new-todo');
    saveNewTodo.addEventListener('click', (ev) => {

        ev.preventDefault();

        const newTodoTask = document.querySelector('.todo-task-input').value;
        const newTodoLink = document.querySelector('.todo-link-input').value;

        if (newTodoTask) {

            data = {
              task: newTodoTask  
            };

            let newLink = '';
            if (newTodoLink) {
                newLink = `<a class="todo-link" href="${newTodoLink}">Link</a>`;
                data.link = newTodoLink;
            }

            const todoItem = htmlToElement(
                `<div class="list-item">
                    <p>
                        <span class="todo-task">${newTodoTask}</span>
                        ${newLink}
                    </p>
                    <div class="button-group">
                        <button type="button" class="btn btn-primary edit-btn" disabled>Edit</button>
                        <button type="button" class="btn btn-danger delete-btn">Delete</button>
                    </div>
                </div>`
            );

            todoList.append(todoItem);

            fetch('/api/devData/todo', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
        }
        newTodoItem.remove();
    });
});

// Configure add log event
logBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newLogItem = htmlToElement(`<div class="list-item">
        <div class= "new-item-input">
            <input type="text" class="log-date-input" placeholder="Date" onkeydown='this.style.width = this.value.length + "ch";'>
            <input type="text" class="log-event-input" placeholder="Event" onkeydown='this.style.width = this.value.length + "ch";'>
            </div>

            <button type="button" class="btn btn-primary save-new-log">Save</button>
        </div>`
    );
    logList.append(newLogItem);

    const saveNewLog = document.querySelector('.save-new-log');
    saveNewLog.addEventListener('click', (event) => {

        event.preventDefault();

        const newLogDate = document.querySelector('.log-date-input').value;
        const newLogEvent = document.querySelector('.log-event-input').value;

        if (newLogDate && newLogEvent) {

            const data = {
                date: newLogDate,
                event: newLogEvent
            };

            const logItem = htmlToElement(
                `<div class="list-item">
                    <p class="log-date">${newLogDate}</p>
                    <p class="log-event">${newLogEvent}</p>
                </div>`
            );

            logList.append(logItem);

            fetch('/api/devData/log', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
        }
        newLogItem.remove();
    });
});


