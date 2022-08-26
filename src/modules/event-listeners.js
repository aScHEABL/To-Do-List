// Sidebar tabs
import { sidebarInboxTab_DOM, sidebarTodayTab_DOM, sidebarWeekTab_DOM, sidebarMonthTab_DOM } from "../index.js";
// Task buttons
import { main_DOM, addTaskButton_DOM, taskList_DOM, addTaskPopupDiv_DOM, addTaskPopupButtonsDiv_DOM, taskAddConfirmButton_DOM, 
    taskCancelButton_DOM, taskInput_DOM } from '../index.js';

import { currentPage } from "../index.js";

import { inboxPage, todayPage, weekPage, monthPage } from "./task-array.js";

import localStorageFN from "./localStorageFN.js";

export default function eventListeners () {

    // Sidebar tabs

    sidebarInboxTab_DOM.addEventListener(`click`, () => {
        currentPage = 0;
        inboxPage();
    })

    sidebarTodayTab_DOM.addEventListener(`click`, () => {
        currentPage = 1;
        todayPage();
    })

    sidebarWeekTab_DOM.addEventListener(`click`, () => {
        currentPage = 2;
        weekPage();
    })

    sidebarMonthTab_DOM.addEventListener(`click`, () => {
        currentPage = 3;
        monthPage();
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
                localStorageFN(0, taskInput_DOM.value);
                inboxPage();
                break;
            case 1:
                localStorageFN(1, taskInput_DOM.value);
                todayPage();
                break;
            case 2:
                localStorageFN(2, taskInput_DOM.value);
                weekPage();
                break;
            case 3:
                localStorageFN(3, taskInput_DOM.value);
                monthPage();
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