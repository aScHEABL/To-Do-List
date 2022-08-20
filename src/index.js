import eventListener from "./modules/event-listeners.js";
import inboxPage from "./modules/inbox.js";

// Current page, 0 = Inbox, 1 = Today, 2 = Week, 3 = Month

export let currentPage = 0;

//Sidebar tabs

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

// functions
inboxPage();
eventListener();