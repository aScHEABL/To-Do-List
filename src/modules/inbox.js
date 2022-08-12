import '../style.css';
import toDoListLogo from '../images/check-all.png'
import inboxIcon from '../images/inbox.png';
import calendarTodayIcon from '../images/calendar-today.png';
import calendarWeekIcon from '../images/calendar-week.png';
import calendarMonthIcon from '../images/calendar-month.png'
import { loadInboxPanel, loadTodayPanel, loadThisWeek, loadThisMonth } from '../index.js';

export default function inboxPanel () {
    console.log(`This is the inbox panel`);
    
    const content_DOM = document.querySelector(`[data-content]`);
    const bgoverlay_DOM = document.querySelector(`[data-bg-overlay]`);
    const header_DOM = document.querySelector(`[data-header]`);
    const toDoListLogo_DOM = document.querySelector(`[data-header-logo]`);
    const toDoListH1_DOM = document.querySelector(`[data-header-h1]`);
    const sidebar_DOM = document.querySelector(`[data-sidebar]`);
    const upcomingEventsDiv_DOM = document.querySelector(`[data-upcoming-events-div]`);
    const sidebarDateButtonArray_DOM = document.querySelectorAll(`[data-sidebar-button]`);
    const main_DOM = document.querySelector(`main`);
    const sidebarProjectDiv_DOM = document.querySelector(`[data-sidebar-project-div]`);
    const sidebarProjectH2_DOM = document.querySelector(`[data-sidebar-project-h2]`);
    const sidebarAddProjectButton_DOM = document.querySelector(`#sidebar-add-project-button`);
    const sidebarAddprojectIcon_DOM = document.querySelector(`[data-sidebar-add-project-icon]`);
    const listTitleH1_DOM = document.querySelector(`[data-list-title-h1]`);
    const addTaskButton_DOM = document.querySelector(`[data-add-task-button]`);
    const addTaskIcon_DOM = document.querySelector(`[data-add-task-icon]`);
    
    sidebarDateButtonArray_DOM.forEach((button, index) => {
        button.addEventListener('click', () => {
            switch (index) {
                case 0:
                    console.log(`clicked Inbox tab, do nothing`);
                    break;
                case 1:
                    console.log(`clicked Today tab, redirecting...`);
                    loadTodayPanel();
                    break;
                case 2:
                    console.log(`clicked This week tab, redirecting...`);
                    break;
                case 3:
                    console.log(`clicked This month tab, redirecting...`);
                    break;
            }
        })
    })

}
