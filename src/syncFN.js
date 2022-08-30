import { inboxTaskArray, todayTaskArray, weekTaskArray, monthTaskArray } from "./modules/task-array";

export default function syncLocalStorageToTaskArray () {
    const inboxTaskArray_deserialized = JSON.parse(localStorage.getItem("inboxTaskArray"));
    const todayTaskArray_deserialized = JSON.parse(localStorage.getItem("todayTaskArray"));
    const weekTaskArray_deserialized = JSON.parse(localStorage.getItem("weekTaskArray"));
    const monthTaskArray_deserialized = JSON.parse(localStorage.getItem("monthTaskArray"));

    inboxTaskArray = inboxTaskArray_deserialized;
    todayTaskArray = todayTaskArray_deserialized;
    weekTaskArray = weekTaskArray_deserialized;
    monthTaskArray = monthTaskArray_deserialized;

    console.log(inboxTaskArray);
}