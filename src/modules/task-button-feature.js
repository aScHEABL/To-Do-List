import { taskList_DOM } from "../index.js";
import { currentPage } from "../index.js";

// export function taskCheckButtonEventListener () {
//     const taskButtonArray = document.querySelectorAll(`[data-task-button]`);
//     const taskCheckButtonArray = document.querySelectorAll(`[data-task-check-button]`);

//     taskCheckButtonArray[taskButtonArray.length - 1].addEventListener(`click`, () => {
//         taskButtonArray[taskButtonArray.length - 1].replaceChildren();
//         taskList_DOM.removeChild(taskButtonArray[taskButtonArray.length - 1]);
//         switch (currentPage) {
//             case 0:
//                 let inboxTask_serialized = localStorage.getItem("inboxTaskArray");
//                 console.log(`Inbox task array ${inboxTask_serialized}`);
//                 break;
//             case 1:
//                 localStorage.getItem("todayTaskArray");
//                 break;
//             case 2:
//                 localStorage.getItem("weekTaskArray");
//                 break;
//             case 3:
//                 localStorage.getItem("monthTaskArray");
//                 break;
//         }
//     })
// }

// export function taskDatePButtonEventListener () {
//     let taskButtonArray = document.querySelectorAll(`[data-task-button]`);
//     let taskDatePButtonArray = document.querySelectorAll(`[data-task-date-p]`);
//     let taskDateInputArray = document.querySelectorAll(`[data-task-date-input]`);
    
//     taskDatePButtonArray.forEach((dueDate, index) => {
//         dueDate.addEventListener(`click`, () => {
//             console.log(`${index} has been clicked`);
//             console.log(taskDateInputArray);
//             taskDatePButtonArray[index].style.display = 'none';
//             taskDateInputArray[index].style.display = 'flex';
//         })
//     })
// }