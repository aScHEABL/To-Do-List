import '../style.css';
// import toDoListLogo from '../images/check-all.png'
// import inboxIcon from '../images/inbox.png';
// import calendarTodayIcon from '../images/calendar-today.png';
// import calendarWeekIcon from '../images/calendar-week.png';
// import calendarMonthIcon from '../images/calendar-month.png'

export const main_DOM = document.querySelector('main');
export const addTaskButton_DOM = document.querySelector('[data-add-task-button]');
export const taskList_DOM = document.querySelector('[data-task-list]');
export const addTaskPopupDiv_DOM = document.createElement('div');
export const addTaskPopupButtonsDiv_DOM = document.createElement('div');
export const taskAddConfirmButton_DOM = document.createElement('button');
export const taskCancelButton_DOM = document.createElement('button');
export const taskInput_DOM = document.createElement('input');

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
})

taskCancelButton_DOM.addEventListener('click', (e) => {
    console.log('Cancel task confirm button has been clicked');

    addTaskButton_DOM.style.display = 'flex';

    main_DOM.removeChild(addTaskPopupDiv_DOM);
    addTaskPopupDiv_DOM.replaceChildren();
})