import '../style.css';
import { emptyTaskList } from '../index.js';

export default function thisMonthPanel () {
    console.log('This is the month panel');

    const listTitleH1 = document.querySelector('[data-list-title-h1]');
    listTitleH1.textContent = 'This Month';

    emptyTaskList();
}