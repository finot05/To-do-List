const input = document.getElementById('taskInput');
const btn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

btn.addEventListener('click', () => {
    addTask(input.value);
    input.value = '';
});

function addTask(task) {
    if (task.trim() === '') return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = task;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerHTML = '<i class="fas fa-pen"></i>';
    editBtn.addEventListener('click', () => updateTask(span));

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.addEventListener('click', () => deleteTask(li));


    const btnGroup = document.createElement('div');
    btnGroup.className = 'task-buttons';
    btnGroup.appendChild(editBtn);
    btnGroup.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(btnGroup);

    document.getElementById('taskList').appendChild(li);
}

function deleteTask(taskElement) {
    taskElement.remove();
}

function updateTask(taskSpan) {
    const newText = prompt('Edit your task:', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskSpan.textContent = newText;
    }
}
