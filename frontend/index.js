let taskList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        taskList.push(taskText);
        updateTaskList();
        taskInput.value = '';
    }
}

function updateTaskList() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button onclick="removeTask(${index})">Remove</button>`;
        taskListElement.appendChild(li);
    });
}

function removeTask(index) {
    taskList.splice(index, 1);
    updateTaskList();
}
