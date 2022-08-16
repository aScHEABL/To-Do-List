import eventListener from './modules/event-listeners.js';
import switchTabsLogic from './modules/switch-tabs-logic.js';
import { dataBase } from './modules/database.js';

// Task
export const main_DOM = document.querySelector('main');
export const addTaskButton_DOM = document.querySelector('[data-add-task-button]');
export const taskList_DOM = document.querySelector('[data-task-list]');
export const addTaskPopupDiv_DOM = document.createElement('div');
export const addTaskPopupButtonsDiv_DOM = document.createElement('div');
export const taskAddConfirmButton_DOM = document.createElement('button');
export const taskCancelButton_DOM = document.createElement('button');
export const taskInput_DOM = document.createElement('input');

// Sidebar
export const inboxButton_DOM = document.querySelector(`#inbox-button`);
export const todayButton_DOM = document.querySelector(`#today-button`);
export const weekButton_DOM = document.querySelector(`#week-button`);
export const monthButton_DOM = document.querySelector(`#month-button`);


eventListener();
dataBase();