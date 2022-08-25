import eventListener from "./modules/event-listeners.js";
import inboxPage from "./modules/inbox.js";
import "./style.css";
// Images
import toDoList_logo from "./images/check-all.png";
import inbox_icon from "./images/inbox.png";
import today_icon from "./images/calendar-today.png";
import week_icon from "./images/calendar-week.png";
import month_icon from "./images/calendar-month.png";
import plus_icon from "./images/plus.png";

// Current page, 0 = Inbox(default), 1 = Today, 2 = Week, 3 = Month

export let currentPage = 0;

// Sidebar tabs

export const sidebarInboxTab_DOM = document.querySelector(`#inbox-button`);
export const sidebarTodayTab_DOM = document.querySelector(`#today-button`);
export const sidebarWeekTab_DOM = document.querySelector(`#week-button`);
export const sidebarMonthTab_DOM = document.querySelector(`#month-button`);

// Task buttons

export const main_DOM = document.querySelector('main');
export const addTaskButton_DOM = document.querySelector('[data-add-task-button]');
export const taskList_DOM = document.querySelector('[data-task-list]');
export const addTaskPopupDiv_DOM = document.createElement('div');
export const addTaskPopupButtonsDiv_DOM = document.createElement('div');
export const taskAddConfirmButton_DOM = document.createElement('button');
export const taskCancelButton_DOM = document.createElement('button');
export const taskInput_DOM = document.createElement('input');

// Icons

const toDoListLogo = document.querySelector(`[data-header-logo]`);
const inboxIcon = document.querySelector(`[data-inbox-icon]`);
const todayIcon = document.querySelector(`[data-today-icon]`);
const weekIcon = document.querySelector(`[data-week-icon]`);
const monthIcon = document.querySelector(`[data-month-icon]`);
const sidebarAddProjectIcon = document.querySelector(`[data-sidebar-add-project-icon]`);
const addTaskIcon = document.querySelector(`[data-add-task-icon]`);

toDoListLogo.src = toDoList_logo;
inboxIcon.src = inbox_icon;
todayIcon.src = today_icon;
weekIcon.src = week_icon;
monthIcon.src = month_icon;
sidebarAddProjectIcon.src = plus_icon;
addTaskIcon.src = plus_icon;

// Active functions
inboxPage();
eventListener();