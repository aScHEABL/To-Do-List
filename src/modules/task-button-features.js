import { taskList_DOM, currentPage } from "../index.js";
import { inboxTaskArray, todayTaskArray, weekTaskArray, monthTaskArray } from "./task-array.js";
import clearRender from "./clear-render.js";
import renderTasks from "./render-task.js";

export default function taskCheckButtonEventListener () {

    let taskButtonArray = document.querySelectorAll(`[data-task-button]`);
    let taskCheckButtonArray = document.querySelectorAll(`[data-task-check-button]`);

    console.log(taskCheckButtonArray);
    
    taskCheckButtonArray[taskCheckButtonArray.length - 1].addEventListener(`click`, () => {
        console.log(`Check button ${taskButtonArray.length - 1} has been clicked`);

        // switch (currentPage) {
        //     case 0:
        //         let inboxTaskArray_serialized = localStorage.getItem("inboxTaskArray");
        //         let inboxTaskArray_deserialized = JSON.parse(inboxTaskArray_serialized);
                
        //         inboxTaskArray_deserialized.splice(taskButtonArray.length - 1, 1);
        //         inboxTaskArray.splice(taskButtonArray.length - 1, 1);
        //         inboxTaskArray_serialized = JSON.stringify(inboxTaskArray_deserialized);
        //         localStorage.setItem("inboxTaskArray", inboxTaskArray_serialized);

        //         clearRender();
        //         renderTasks(localStorage.getItem("inboxTaskArray"));
        //         break;
        //     case 1:
        //         let todayTaskArray_serialized = localStorage.getItem("todayTaskArray");
        //         let todayTaskArray_deserialized = JSON.parse(todayTaskArray_serialized);

        //         todayTaskArray_deserialized.splice(taskButtonArray.length - 1, 1);
        //         todayTaskArray.splice(taskButtonArray.length - 1, 1);
        //         todayTaskArray_serialized = JSON.stringify(todayTaskArray_deserialized);
        //         localStorage.setItem("todayTaskArray", todayTaskArray_serialized);

        //         clearRender()
        //         renderTasks(localStorage.getItem("todayTaskArray"));
        //         break;
        //     case 2:
        //         let weekTaskArray_serialized = localStorage.getItem("weekTaskArray");
        //         let weekTakArray_deserialized = JSON.parse(weekTaskArray_serialized);

        //         weekTakArray_deserialized.splice(taskButtonArray.length - 1, 1);
        //         weekTaskArray.splice(taskButtonArray.length - 1, 1);
        //         weekTaskArray_serialized = JSON.stringify(weekTakArray_deserialized);
        //         localStorage.setItem("weekTaskArray", weekTaskArray_serialized);

        //         clearRender();
        //         renderTasks(localStorage.getItem("weekTaskArray"));
        //         break;
        //     case 3:
        //         let monthTaskArray_serialized = localStorage.getItem("monthTaskArray");
        //         let monthTaskArray_deserialized = JSON.parse(monthTaskArray_serialized);

        //         monthTaskArray_deserialized.splice(taskButtonArray.length - 1, 1);
        //         monthTaskArray.splice(taskButtonArray.length - 1, 1);
        //         monthTaskArray_serialized = JSON.stringify(monthTaskArray_deserialized);
        //         localStorage.setItem("monthTaskArray", monthTaskArray_serialized);

        //         clearRender();
        //         renderTasks(localStorage.getItem("monthTaskArray"));
        //         break;
        // }
    })
}