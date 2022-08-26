import clearRender from "./clear-render.js";
import renderTasks from "./render-task.js";

export const inboxTaskArray = [];
export const todayTaskArray = [];
export const weekTaskArray = [];
export const monthTaskArray = [];

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