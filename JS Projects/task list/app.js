const form = document.querySelector('#task-form');
const taskInput =document.querySelector('#task-input');
const taskList = document.querySelector('.task-list');
const clearTask = document.querySelector('.clear-task');
const filter = document.querySelector('#task-filter');

loadEventListener();

function loadEventListener(){
    form.addEventListener('submit',addTask);
    taskList.addEventListener('click',removetask);
    clearTask.addEventListener('click',clearall);
    filter.addEventListener('keyup',filterTask);
    document.addEventListener('DOMContentLoaded',domTasks);
}

function addTask(e){
    if(taskInput.value === ''){
        alert('Add a task');
    }
    else{
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerText = taskInput.value;
        const a = document.createElement('a');
        a.className = 'delete-item secondary-content';
        a.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        li.appendChild(a);
        taskList.appendChild(li);

        storeTaskInLocalStorage(taskInput.value);
        taskInput.value = '';
    }
    e.preventDefault();
}

function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function removetask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        e.target.parentElement.parentElement.remove();
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
}
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
}

function clearall(){
    //tasklist.innerHTML = '';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearAllFromLocalStorage();
}
function clearAllFromLocalStorage(){
    localStorage.clear();
}

function filterTask(e){
    const text = e.target.value.toLowerCase();
    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        }
        else{
            task.style.display = 'none';
        }
    });
}

function domTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
        const li = document.createElement('li');
        li.className = 'collection-item';
        li.innerText = task;
        const a = document.createElement('a');
        a.className = 'delete-item secondary-content';
        a.innerHTML = `<i class="fas fa-trash-alt"></i>`;
        li.appendChild(a);
        taskList.appendChild(li);
    })
}