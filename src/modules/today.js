import clearRender from "./clear-render";
import renderTasks from "./render-tasks";

export let todayTaskArray = [];

export default function todayPage () {
    console.log(`Switched to today page`);
    clearRender();

    renderTasks(localStorage.getItem("todayTaskArray"));
}