// Task list DOM
import { main_DOM, addTaskButton_DOM, taskList_DOM, addTaskPopupDiv_DOM, addTaskPopupButtonsDiv_DOM, taskAddConfirmButton_DOM, 
taskCancelButton_DOM, taskInput_DOM } from '../index.js';
// Sidebar tabs DOM
import { inboxButton_DOM, todayButton_DOM, weekButton_DOM, monthButton_DOM } from '../index.js';

import taskButton from './task-button.js';



export default function eventListener () {
    addTaskButton_DOM.addEventListener(`click`, () => {
        console.log(`Add task button has been clicked`);

        addTaskButton_DOM.style.display = 'none';

        taskInput_DOM.value = ``;

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

        if (taskInput_DOM.value.length === 0) {
            alert("Task name can't be empty!");
            return;
        }
        
        taskButton();
    })

    taskCancelButton_DOM.addEventListener('click', (e) => {
        console.log('Cancel task confirm button has been clicked');

        addTaskButton_DOM.style.display = 'flex';

        main_DOM.removeChild(addTaskPopupDiv_DOM);
        addTaskPopupDiv_DOM.replaceChildren();
    })

    inboxButton_DOM.addEventListener(`click`, (e) => {
        console.log(`Inbox tab has been clicked`);
    })
    
    todayButton_DOM.addEventListener(`click`, (e) => {
        console.log(`Today tab has been clicked`);
    })
    
    weekButton_DOM.addEventListener(`click`, (e) => {
        console.log(`Week tab has been clicked`);
    })
    
    monthButton_DOM.addEventListener(`click`, (e) => {
        console.log(`Month tab has been clicked`);
    })
}