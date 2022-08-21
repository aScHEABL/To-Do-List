import clearRender from "./clear-render";
import renderTasks from "./render-tasks";

export let monthTaskArray = [];

export default function monthPage () {
    console.log(`Switched to month page`);
    clearRender();

    renderTasks(localStorage.getItem("monthTaskArray"));
}