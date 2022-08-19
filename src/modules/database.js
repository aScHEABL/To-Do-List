import { format } from 'date-fns';

class Task {
    constructor (taskName, dueTime) {
        this.taskName = taskName;
        this.dueTime = dueTime;
    }
}

let TaskArray = [];

export default function dataBase () {
    const taskTitleArray = document.querySelectorAll(`[data-task-title-h2]`);
    // console.log(taskTitleArray);
    taskTitleArray.forEach((title, index) => {
        let taskTitle = taskTitleArray[index].textContent;
        TaskArray.push(new Task(taskTitle));
        console.log(TaskArray);
    })


    // const doMathTask = new task("Do math", "2022/8/16");
    
    // let doMathTaskObj = JSON.stringify(doMathTask);
    // console.log(doMathTaskObj);


}