// Sidebar tabs
import { sidebarInboxTab_DOM, sidebarTodayTab_DOM, sidebarWeekTab_DOM, sidebarMonthTab_DOM } from "../index.js";
// Task buttons
import { main_DOM, addTaskButton_DOM, taskList_DOM, addTaskPopupDiv_DOM, addTaskPopupButtonsDiv_DOM, taskAddConfirmButton_DOM, 
    taskCancelButton_DOM, taskInput_DOM } from '../index.js';

import inboxPage from "./inbox.js";

import { currentPage } from "../index.js";
import LocalStorageFN from "./LocalStorageFN.js";

export default function eventListener () {

    // Sidebar tabs

    sidebarInboxTab_DOM.addEventListener(`click`, () => {
        inboxPage();
        currentPage = 0;
    })

    sidebarTodayTab_DOM.addEventListener(`click`, () => {
        console.log(`Switching to today page`);
        
        currentPage = 1;
    })

    sidebarWeekTab_DOM.addEventListener(`click`, () => {
        console.log(`Switching to week page`);
        currentPage = 2;
    })

    sidebarMonthTab_DOM.addEventListener(`click`, () => {
        console.log(`Swithcing to month page`);
        currentPage = 3;
    })

    // Task buttons

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

    taskAddConfirmButton_DOM.addEventListener('click', () => {
        console.log('Add task confirm button has been clicked');


        addTaskButton_DOM.style.display = 'flex';

        addTaskPopupDiv_DOM.replaceChildren();
        main_DOM.removeChild(addTaskPopupDiv_DOM);

        if (taskInput_DOM.value.length === 0) {
            alert("Task name can't be empty!");
            return;
        }

        switch (currentPage) {
            case 0:
                // Inbox page
                LocalStorageFN(0, taskInput_DOM.value)
                inboxPage();
                break;
            case 1:
                // Today page
                LocalStorageFN(1, taskInput_DOM.value)
                break;
            case 2:
                // Week page
                LocalStorageFN(2, taskInput_DOM.value)
                break;
            case 3:
                // Month page
                LocalStorageFN(3, taskInput_DOM.value)
                break;
        }
    })

    taskCancelButton_DOM.addEventListener('click', () => {
        console.log('Cancel task confirm button has been clicked');

        addTaskButton_DOM.style.display = 'flex';

        addTaskPopupDiv_DOM.replaceChildren();
        main_DOM.removeChild(addTaskPopupDiv_DOM);
    })


}