// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add task to the list
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return alert('Please enter a task.');

    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button class="deleteTask">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = '';

    // Delete task
    li.querySelector('.deleteTask').addEventListener('click', () => {
        li.remove();
    });

    // Mark as complete
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });
});

// Select the "Clear All Tasks" button
const clearAllButton = document.getElementById('clearAllButton');

// Add an event listener to the button
clearAllButton.addEventListener('click', () => {
    // Clear all tasks from the task list
    taskList.innerHTML = '';

    // Optionally, if using localStorage, clear it too
    localStorage.removeItem('tasks');
});

