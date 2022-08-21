import { inboxTaskArray } from "./inbox.js";
import { todayTaskArray } from "./today.js";
import { weekTaskArray } from "./this-week.js";
import { monthTaskArray } from "./this-month.js";

class Task {
    constructor (taskTitle, dueTime) {
        this.taskTitle = taskTitle;
        this.dueTime = dueTime;   
    }
}

export default function LocalStorageFN (pageIndex, title) {
    switch (pageIndex) {
        case 0:
            // Inbox task array
            inboxTaskArray.push(new Task(title));
            let inboxTask_serialized = JSON.stringify(inboxTaskArray);
            localStorage.setItem("inboxTaskArray", inboxTask_serialized);
            break;
        case 1:
            // Today task array
            todayTaskArray.push(new Task(title));
            let todayTask_serialized = JSON.stringify(todayTaskArray);
            localStorage.setItem("todayTaskArray", todayTask_serialized);
            break;
        case 2:
            // Week task array
            weekTaskArray.push(new Task(title));
            let weekTask_serialized = JSON.stringify(weekTaskArray);
            localStorage.setItem("weekTaskArray", weekTask_serialized);
            break;
        case 3:
            // Month task array
            monthTaskArray.push(new Task(title));
            let monthTask_serialized = JSON.stringify(monthTaskArray);
            localStorage.setItem("monthTaskArray", monthTask_serialized);
            break;
    }
    
}