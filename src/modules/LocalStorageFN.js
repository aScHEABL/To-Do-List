import { inboxTaskArray } from "./inbox.js";

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
            let todayTaskArray = [];
            break;
        case 2:
            // Week task array
            let weekTaskArray = [];
            break;
        case 3:
            // Month task array
            let monthTaskArray = [];
            break;
    }
    
}