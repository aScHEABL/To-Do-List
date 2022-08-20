import clearRender from "./clear-render.js";
import LocalStorageFN from "./LocalStorageFN.js";
import renderTasks from "./render-tasks.js";
import { currentPage } from "../index.js";

export default function inboxPage () {
    currentPage = 0;

    const taskArray = [];

    clearRender();

    LocalStorageFN(taskArray);
    console.log(taskArray);
}