import { inboxTaskArray, todayTaskArray, weekTaskArray, monthTaskArray } from "./task-array";

import { taskList_DOM, currentPage } from "../index.js";

import clearRender from "./clear-render";

import { format } from "date-fns";

export default function renderTasks (taskArray) {

    let taskButtonArray = document.querySelectorAll(`[data-task-button]`);

    let taskArray_deserialized = JSON.parse(taskArray);

    if (taskArray_deserialized == null) {
        return;
    } else {
        taskArray_deserialized.forEach((taskButton, index) => {
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

        taskTitleH2_DOM.textContent = taskButton.taskTitle
        // taskDateP_DOM.textContent = 'No Date';
        if (taskButton.dueTime == null) {
            taskDateP_DOM.textContent = "No Date";
        } else {
            taskDateP_DOM.textContent = taskButton.dueTime;
        }

        taskCheckButton_DOM.addEventListener(`click`, () => {
            console.log(`Check button${index} has been clicked`);

            switch(currentPage) {
                case 0:
                    let inboxTaskArray_serialized = localStorage.getItem("inboxTaskArray");
                    let inboxTaskArray_deserialized = JSON.parse(inboxTaskArray_serialized);

                    inboxTaskArray_deserialized.splice(taskButtonArray.length - 1, 1);
                    inboxTaskArray.splice(taskButtonArray.length - 1, 1);
                    inboxTaskArray_serialized = JSON.stringify(inboxTaskArray_deserialized);
                    localStorage.setItem("inboxTaskArray", inboxTaskArray_serialized);

                    clearRender();
                    renderTasks(localStorage.getItem("inboxTaskArray"));
                    break;
                case 1:
                    let todayTaskArray_serialized = localStorage.getItem("todayTaskArray");
                    let todayTaskArray_deserialized = JSON.parse(todayTaskArray_serialized);

                    todayTaskArray_deserialized.splice(taskButtonArray.length - 1, 1);
                    todayTaskArray.splice(taskButtonArray.length - 1, 1);
                    todayTaskArray_serialized = JSON.stringify(todayTaskArray_deserialized);
                    localStorage.setItem("todayTaskArray", todayTaskArray_serialized);

                    clearRender()
                    renderTasks(localStorage.getItem("todayTaskArray"));
                    break;
                case 2:
                    let weekTaskArray_serialized = localStorage.getItem("weekTaskArray");
                    let weekTakArray_deserialized = JSON.parse(weekTaskArray_serialized);

                    weekTakArray_deserialized.splice(taskButtonArray.length - 1, 1);
                    weekTaskArray.splice(taskButtonArray.length - 1, 1);
                    weekTaskArray_serialized = JSON.stringify(weekTakArray_deserialized);
                    localStorage.setItem("weekTaskArray", weekTaskArray_serialized);

                    clearRender();
                    renderTasks(localStorage.getItem("weekTaskArray"));
                    break;
                case 3:
                    let monthTaskArray_serialized = localStorage.getItem("monthTaskArray");
                    let monthTaskArray_deserialized = JSON.parse(monthTaskArray_serialized);

                    monthTaskArray_deserialized.splice(taskButtonArray.length - 1, 1);
                    monthTaskArray.splice(taskButtonArray.length - 1, 1);
                    monthTaskArray_serialized = JSON.stringify(monthTaskArray_deserialized);
                    localStorage.setItem("monthTaskArray", monthTaskArray_serialized);

                    clearRender();
                    renderTasks(localStorage.getItem("monthTaskArray"));
                    break;
            }
        })

        taskDateP_DOM.addEventListener(`click`, () => {
            console.log(`Date button ${index} has been clicked`);

            taskDateP_DOM.style.display = "none";
            taskDateInput_DOM.style.display = "flex";
        })

        taskDateInput_DOM.addEventListener(`change`, () => {
            console.log(`User selects ${taskDateInput_DOM.value}`);

            let formattedDate = format(new Date(taskDateInput_DOM.value), "MM/dd");

            taskDateP_DOM.textContent = formattedDate;

            switch(currentPage) {
                case 0:
                    inboxTaskArray[index].dueTime = formattedDate;
                    taskDateP_DOM.textContent = formattedDate;

                    let inboxTaskArray_serialized = JSON.stringify(inboxTaskArray);
                    localStorage.setItem("inboxTaskArray", inboxTaskArray_serialized);
                    break;
                case 1:
                    todayTaskArray[index].dueTime = formattedDate;
                    taskDateP_DOM.textContent = formattedDate;

                    let todayTaskArray_serialized = JSON.stringify(todayTaskArray);
                    localStorage.setItem("todayTaskArray", todayTaskArray_serialized);
                    break;
                case 2:
                    weekTaskArray[index].dueTime = formattedDate;
                    taskDateP_DOM.textContent = formattedDate;

                    let weekTaskArray_serialized = JSON.stringify(weekTaskArray);
                    localStorage.setItem("weekTaskArray", weekTaskArray_serialized);
                    break;
                case 3:
                    monthTaskArray[index].dueTime = formattedDate;
                    taskDateInput_DOM.textContent = formattedDate;

                    let monthTaskArray_serialized = JSON.stringify(monthTaskArray);
                    localStorage.setItem("monthTaskArray", monthTaskArray_serialized);
                    break;
            }

            taskDateP_DOM.style.display = "flex";
            taskDateInput_DOM.style.display = "none";
        })

        taskList_DOM.append(taskButton_DOM);
        taskButton_DOM.append(taskButtonLeftDiv_DOM, taskButtonRightDiv_DOM);
        taskButtonLeftDiv_DOM.append(taskCheckButton_DOM, taskTitleH2_DOM);
        taskButtonRightDiv_DOM.append(taskDateP_DOM, taskDateInput_DOM);
        })
    }
}