import clearRender from "./clear-render";
import renderTasks from "./render-tasks";

export let inboxTaskArray = [];

export default function inboxPage () {
    console.log(`Switched to inbox page`);
    clearRender();

    renderTasks(localStorage.getItem("inboxTaskArray"));

}