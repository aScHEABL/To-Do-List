let taskList_DOM = document.querySelector(`[data-task-list]`);

export function taskCheckButtonEventListener () {
    const taskLastButton = document.querySelector(`[data-task-button]:last-of-type`);
    const taskLastCheckButton = taskLastButton.querySelector(`[data-task-check-button]`);
    // console.log(taskLastButton);
    // console.log(taskLastCheckButton);

    taskLastCheckButton.addEventListener(`click`, () => {
        taskLastButton.replaceChildren();
        taskList_DOM.removeChild(taskLastButton);
    })
}

// export function taskCheckButtonEventListener () {
//     const taskButtonArray = document.querySelectorAll(`[data-task-button]`);
//     const taskCheckButtonArray = document.querySelectorAll(`[data-task-check-button]`);

//     taskCheckButtonArray[taskButtonArray.length - 1].addEventListener(`click`, () => {
//         taskButtonArray[taskButtonArray.length - 1].replaceChildren();
//         taskList_DOM.removeChild(taskButtonArray[taskButtonArray.length - 1]);
//     })
// }

export function taskDatePButtonEventListener () {
    const taskLastButton = document.querySelector(`[data-task-button]:last-of-type`);
    const taskLastDateP = taskLastButton.querySelector(`[data-task-date-p]`);
    // console.log(taskLastButton);
    // console.log(taskLastDateP);

    taskLastDateP.addEventListener(`click`, () => {
        taskLastDateP.style.display = "none";
        
    })
}