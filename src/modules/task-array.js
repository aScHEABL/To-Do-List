let taskList_DOM = document.querySelector(`[data-task-list]`);

// export function taskCheckButtonEventListener () {
//     const taskLastButton = document.querySelector(`[data-task-button]:last-of-type`);
//     const taskLastCheckButton = taskLastButton.querySelector(`[data-task-check-button]`);
//     console.log(taskLastButton);
//     console.log(taskLastCheckButton);

//     taskLastCheckButton.addEventListener(`click`, () => {
//         taskLastButton.replaceChildren();
//         taskList_DOM.removeChild(taskLastButton);
//     })
// }

export function taskCheckButtonEventListener () {
    const taskButtonArray = document.querySelectorAll(`[data-task-button]`);
    const taskCheckButtonArray = document.querySelectorAll(`[data-task-check-button]`);

    taskCheckButtonArray[taskButtonArray.length - 1].addEventListener(`click`, () => {
        taskButtonArray[taskButtonArray.length - 1].replaceChildren();
        taskList_DOM.removeChild(taskButtonArray[taskButtonArray.length - 1]);
    })
}

export function taskDatePButtonEventListener () {
    let taskButtonArray = document.querySelectorAll(`[data-task-button]`);
    let taskDatePButtonArray = document.querySelectorAll(`[data-task-date-p]`);
    let taskDateInputArray = document.querySelectorAll(`[data-task-date-input]`);
    
    taskDatePButtonArray.forEach((dueDate, index) => {
        dueDate.addEventListener(`click`, () => {
            console.log(`${index} has been clicked`);
            console.log(taskDateInputArray);
            taskDatePButtonArray[index].style.display = 'none';
            taskDateInputArray[index].style.display = 'flex';
        })
    })
}