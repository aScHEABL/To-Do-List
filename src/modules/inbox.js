import '../style.css';
import toDoListLogo from '../images/check-all.png'
import inboxIcon from '../images/inbox.png';
import calendarTodayIcon from '../images/calendar-today.png';
import calendarWeekIcon from '../images/calendar-week.png';
import calendarMonthIcon from '../images/calendar-month.png'


export default function createInboxPanel () {
    console.log(`This is the inbox panel`);
    
    const inboxContent_DOM = document.querySelector(`[data-inbox-content]`);
    const inboxBgoverlay_DOM = document.querySelector(`[data-bg-overlay]`);
    const inboxHeader_DOM = document.querySelector(`[data-inbox-header]`);
    const toDoListLogo_DOM = document.querySelector(`[data-header-logo]`);
    const toDoListH1_DOM = document.querySelector(`[data-header-h1]`);
    const inboxSidebar_DOM = document.querySelector(`[data-inbox-sidebar]`);
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

    sidebarDateButtonArray.forEach((button) => {
        button.addEventListener(`click`, (e) => {
            
        })
    })
}