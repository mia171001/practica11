document.getElementById('btnAdd').addEventListener('click', () => {
    const task = document.getElementById('idTask').value;

    if (task.trim() !== '') {
        tasks.push(task);
        renderTask();
        document.getElementById('idTask').value = '';
    } else {
        alert('Por favor ingresa una tarea válida');
    }
});

let tasks = [];

function renderTask() {
    const listTask = document.getElementById('listTask');
    listTask.innerHTML = '';
    tasks.forEach(task => {
        const newTask = document.createElement('li');
        newTask.textContent = task;
        listTask.appendChild(newTask);
    });
}