import clearRender from "./clear-render";
import renderTasks from "./render-tasks";
import html from "../../dist/index.html";

export let inboxTaskArray = [];

export default function inboxPage () {
    console.log(`Switched to inbox page`);
    clearRender();

    renderTasks(localStorage.getItem("inboxTaskArray"));

}