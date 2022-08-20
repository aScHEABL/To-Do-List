import { inboxTaskArray } from './inbox.js';
import { taskInput_DOM } from '../index.js';
import { format } from 'date-fns';

class Task {
    constructor (taskName, dueTime) {
        this.taskName = taskName;
        this.dueTime = dueTime;
    }
}

export default function LocalStorageFN () {
    
    inboxTaskArray.push(new Task(taskInput_DOM.value));
    console.log(inboxTaskArray);
}