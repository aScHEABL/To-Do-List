import inboxPanel from './modules/inbox.js';
import todayPanel from './modules/today.js';
import thisWeekPanel from './modules/this-week.js';
import thisMonthPanel from './modules/this-month.js';
import indexEventListener from './modules/inbox.js';

inboxPanel();

export function loadInboxPanel () {
    inboxPanel();
}

export function loadTodayPanel () {
    todayPanel();
}

export function loadThisWeek () {
    thisWeekPanel();
}

export function loadThisMonth () {
    thisMonthPanel();
}

// switch tabs logics

export const sidebarDateButtons_DOM = document.querySelectorAll('[data-sidebar-date-button]');

sidebarDateButtons_DOM.forEach((button, index) => {
    button.addEventListener('click', (e) => {
        switch (index) {
            case 0:
                loadInboxPanel();
                break;
            case 1:
                loadTodayPanel();
                break;
            case 2:
                loadThisWeek();
                break;
            case 3:
                loadThisMonth();
                break;
        }
    })
})