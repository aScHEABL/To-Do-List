import clearRender from "./clear-render.js";
import renderTasks from "./render-task.js";

export let inboxTaskArray = [];
export let todayTaskArray = [];
export let weekTaskArray = [];
export let monthTaskArray = [];

export function inboxPage () {
    console.log(`Switched to inbox page`);
    clearRender();
    renderTasks(localStorage.getItem("inboxTaskArray"));
}

export function todayPage () {
    console.log(`Switched to today page`);
    clearRender();
    renderTasks(localStorage.getItem("todayTaskArray"));
}

export function weekPage () {
    console.log(`Switched to week page`);
    clearRender();
    renderTasks(localStorage.getItem("weekTaskArray"));
}

export function monthPage () {
    console.log(`Swithced to month page`);
    clearRender();
    renderTasks(localStorage.getItem("monthTaskArray"));
}