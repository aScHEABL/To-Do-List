import '../style.css';

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
}

addTaskButton_DOM.addEventListener('click', (e) => {
    console.log('Add task button has been clicked');

    addTaskButton_DOM.style.display = 'none';

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

    addObjectToLocalStorage();
    createTask();
    getTaskArray();

    main_DOM.removeChild(addTaskPopupDiv_DOM);
    addTaskPopupDiv_DOM.replaceChildren();
})

taskCancelButton_DOM.addEventListener('click', (e) => {
    console.log('Cancel task confirm button has been clicked');

    addTaskButton_DOM.style.display = 'flex';

    main_DOM.removeChild(addTaskPopupDiv_DOM);
    addTaskPopupDiv_DOM.replaceChildren();
})

function addObjectToLocalStorage () {
    checkIfInputIsEmpty();

}

function checkIfInputIsEmpty () {

}

function createTask () {
    const taskButton_DOM = document.createElement('button');
    const taskButtonLeftDiv_DOM = document.createElement('div');
    const taskCheckButton_DOM = document.createElement('div');
    const taskTitleH2_DOM = document.createElement('h2');
    const taskButtonRightDiv_DOM = document.createElement('div');
    const taskDateP_DOM = document.createElement('p');

    taskButton_DOM.classList.add('task-button');
    taskButtonLeftDiv_DOM.classList.add('task-button-left-div');
    taskCheckButton_DOM.classList.add('task-check-button');
    taskTitleH2_DOM.classList.add('task-title-h2');
    taskButtonRightDiv_DOM.classList.add('task-button-right-div');
    taskDateP_DOM.classList.add('task-date-p');

    taskTitleH2_DOM.textContent = taskInput_DOM.value;
    taskDateP_DOM.textContent = 'No Date';

    taskList_DOM.append(taskButton_DOM);
    taskButton_DOM.append(taskButtonLeftDiv_DOM, taskButtonRightDiv_DOM);
    taskButtonLeftDiv_DOM.append(taskCheckButton_DOM, taskTitleH2_DOM);
    taskButtonRightDiv_DOM.append(taskDateP_DOM);
}

function getTaskArray () {
    let taskButtonsArray = document.getElementsByClassName('task-button');
    let taskCheckButtonsArray = document.getElementsByClassName('task-check-button');
    // console.log(taskButtonsArray);
    // console.log(taskCheckButtonsArray);
    checkButtonEventListener(taskButtonsArray, taskCheckButtonsArray);
}

function checkButtonEventListener (taskButtonsArray, taskCheckButtonsArray) {
    for (let i = 0; i < taskButtonsArray.length; i++) {
        taskCheckButtonsArray[i].addEventListener('click', () => {
            console.log(`Check task ${i} has been clicked`);
            taskList_DOM.removeChild(taskButtonsArray[i]);
        })
    }
}