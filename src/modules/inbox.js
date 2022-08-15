import '../style.css';
import { emptyTaskList } from '../index.js';

const main_DOM = document.querySelector('main');
const addTaskButton_DOM = document.querySelector('[data-add-task-button]');
const taskList_DOM = document.querySelector('[data-task-list]');
const addTaskPopupDiv_DOM = document.createElement('div');
const addTaskPopupButtonsDiv_DOM = document.createElement('div');
const taskAddConfirmButton_DOM = document.createElement('button');
const taskCancelButton_DOM = document.createElement('button');
const taskInput_DOM = document.createElement('input');

export default function inboxPanel () {
    console.log('This is the inbox panel');

    const listTitleH1 = document.querySelector('[data-list-title-h1]');
    listTitleH1.textContent = 'Inbox';

    emptyTaskList();
    getTaskArray();

    addTaskButton_DOM.addEventListener('click', () => {
        console.log('Add task button has been clicked');
    
        addTaskButton_DOM.style.display = 'none';

        taskInput_DOM.value = '';
    
        addTaskPopupDiv_DOM.classList.add('add-task-popup-div');
        addTaskPopupButtonsDiv_DOM.classList.add('add-task-popup-buttons-div');
        taskInput_DOM.classList.add('task-input');
        taskAddConfirmButton_DOM.classList.add('task-add-confirm-button');
        taskCancelButton_DOM.classList.add('task-cancel-confirm-button');
    
        taskAddConfirmButton_DOM.textContent = 'Add';
        taskCancelButton_DOM.textContent = 'Cancel';
    
        main_DOM.append(addTaskPopupDiv_DOM);
        addTaskPopupDiv_DOM.append(taskInput_DOM, addTaskPopupButtonsDiv_DOM);
        addTaskPopupButtonsDiv_DOM.append(taskAddConfirmButton_DOM, taskCancelButton_DOM);
    })
    
    taskAddConfirmButton_DOM.addEventListener('click', (e) => {
        console.log('Add task confirm button has been clicked');
    
        addTaskButton_DOM.style.display = 'flex';
    
        main_DOM.removeChild(addTaskPopupDiv_DOM);
        addTaskPopupDiv_DOM.replaceChildren();
    
        if (addObjectToLocalStorage() === true) return;
        createTask();
        getTaskArray();
    
    })
    
    taskCancelButton_DOM.addEventListener('click', (e) => {
        console.log('Cancel task confirm button has been clicked');
    
        addTaskButton_DOM.style.display = 'flex';
    
        main_DOM.removeChild(addTaskPopupDiv_DOM);
        addTaskPopupDiv_DOM.replaceChildren();
    })
    
    function addObjectToLocalStorage () {
        if (checkIfInputIsEmpty() === true) return true;
        class task {
            constructor (taskTitle, taskDueDate) {
                this.taskTitle = taskInput_DOM.value;
            }
        }
    }
    
    function checkIfInputIsEmpty () {
        if (taskInput_DOM.value.length === 0) {
            alert("Task name can't be empty");
            return true;
        }
    }
    
    function createTask () {
        const taskButton_DOM = document.createElement('button');
        const taskButtonLeftDiv_DOM = document.createElement('div');
        const taskCheckButton_DOM = document.createElement('div');
        const taskTitleH2_DOM = document.createElement('h2');
        const taskButtonRightDiv_DOM = document.createElement('div');
        const taskDateP_DOM = document.createElement('p');
        const taskDateInput_DOM = document.createElement('input');
    
        taskButton_DOM.classList.add('task-button');
        taskButtonLeftDiv_DOM.classList.add('task-button-left-div');
        taskCheckButton_DOM.classList.add('task-check-button');
        taskTitleH2_DOM.classList.add('task-title-h2');
        taskButtonRightDiv_DOM.classList.add('task-button-right-div');
        taskDateP_DOM.classList.add('task-date-p');
        taskDateInput_DOM.classList.add('task-date-input');
    
        taskButton_DOM.dataset['taskButton'] = '';
        taskButtonLeftDiv_DOM.dataset['taskButtonLeftDiv'] = '';
        taskCheckButton_DOM.dataset['taskCheckButton'] = '';
        taskTitleH2_DOM.dataset['taskTitleH2'] = '';
        taskButtonRightDiv_DOM.dataset['taskButtonRightDiv'] = '';
        taskDateP_DOM.dataset['taskDateP'] = '';
        taskDateInput_DOM.dataset['taskDateInput'] = '';

        taskDateInput_DOM.type = 'date';
    
        taskTitleH2_DOM.textContent = taskInput_DOM.value;
        taskDateP_DOM.textContent = 'No Date';
    
        taskList_DOM.append(taskButton_DOM);
        taskButton_DOM.append(taskButtonLeftDiv_DOM, taskButtonRightDiv_DOM);
        taskButtonLeftDiv_DOM.append(taskCheckButton_DOM, taskTitleH2_DOM);
        taskButtonRightDiv_DOM.append(taskDateP_DOM, taskDateInput_DOM);
    }
    
    function getTaskArray () {
        let taskButtonsArray = document.querySelectorAll('[data-task-button]');
        let taskCheckButtonsArray = document.querySelectorAll('[data-task-check-button]');
        let taskButtonRightDivArray = document.querySelectorAll('[data-task-button-right-div]');
        let taskDatePArray = document.querySelectorAll('[data-task-date-p]');
        let taskDateInputArray = document.querySelectorAll('[data-task-date-input]');
        checkButtonEventListener(taskButtonsArray, taskCheckButtonsArray);
        taskDateParaEventListener(taskButtonsArray, taskDatePArray, taskDateInputArray, taskButtonRightDivArray);
    }
    
    function checkButtonEventListener (taskButtonsArray, taskCheckButtonsArray) {    
        for (let i = 0; i < taskButtonsArray.length; i++) {
            taskCheckButtonsArray[i].addEventListener('click', () => {
                console.log(`Check task ${i} has been clicked`);
                taskButtonsArray[i].replaceChildren();
                taskList_DOM.removeChild(taskButtonsArray[i]);
            })
        }
    }
    
    function taskDateParaEventListener (taskButtonsArray, taskDatePArray, taskDateInputArray, taskButtonRightDivArray) {
        for (let i = 0; i < taskButtonsArray.length; i++) {
            taskDatePArray[i].addEventListener('click', () => {
                console.log(`Task date p ${i} has been clicked`);

                taskDatePArray[i].style.display = 'none';
                taskDateInputArray[i].style.display = 'flex';

                taskButtonRightDivArray[i].append(taskDateInputArray[i]);
            })
        }
    }
}

