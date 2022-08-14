import '../style.css';
import { emptyTaskList } from '../index.js';

export default function todayPanel () {
    console.log('This is the today panel');

    const listTitleH1 = document.querySelector('[data-list-title-h1]');
    listTitleH1.textContent = 'Today';

    emptyTaskList();
}