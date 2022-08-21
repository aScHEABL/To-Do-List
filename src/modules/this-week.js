import clearRender from "./clear-render";
import renderTasks from "./render-tasks";

export let weekTaskArray = [];

export default function weekPage () {
    console.log(`Switched to week page`);
    clearRender();

    renderTasks(localStorage.getItem("weekTaskArray"));
}