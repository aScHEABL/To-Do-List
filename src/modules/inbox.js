import '../style.css';
// import toDoListLogo from '../images/check-all.png'
// import inboxIcon from '../images/inbox.png';
// import calendarTodayIcon from '../images/calendar-today.png';
// import calendarWeekIcon from '../images/calendar-week.png';
// import calendarMonthIcon from '../images/calendar-month.png'

const addTaskButton_DOM = document.querySelector('[data-add-task-button]');
const main_DOM = document.querySelector('main');

export default function inboxPanel () {
    console.log('This is the inbox panel');

    const listTitleH1 = document.querySelector('[data-list-title-h1]');
    listTitleH1.textContent = 'Inbox';
}

addTaskButton_DOM.addEventListener('click', (e) => {
    console.log('Add task button has been clicked');

    addTaskButton_DOM.style.display = 'none';

    const taskInput_DOM = document.createElement('input');
    const taskConfirmButton_DOM = document.createElement('button');
    const cancelTaskButton_DOM = document.createElement('button');

    taskInput_DOM.classList.add('task-input');
    taskConfirmButton_DOM.classList.add('task-confirm-button');
    cancelTaskButton_DOM.classList.add('task-confirm-button');

    taskConfirmButton_DOM.textContent = 'Add';
    cancelTaskButton_DOM.textContent = 'Cancel';

    main_DOM.append(taskInput_DOM, taskConfirmButton_DOM, cancelTaskButton_DOM);
})
