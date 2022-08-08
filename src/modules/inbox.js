import '../style.css';
import toDoListLogo from '../images/check-all.png'
import inboxIcon from '../images/inbox.png';
import calendarTodayIcon from '../images/calendar-today.png';
import calendarWeekIcon from '../images/calendar-week.png';
import calendarMonthIcon from '../images/calendar-month.png'


export default function createInboxPanel () {
    console.log(`This is the inbox panel`);
    const body_DOM = document.body;
    const inboxContentDiv_DOM = document.createElement(`div`);
    inboxContentDiv_DOM.classList.add(`inbox-content`);
    body_DOM.append(inboxContentDiv_DOM);
    
    const bgOverlay_DOM = document.createElement(`div`);
    bgOverlay_DOM.classList.add(`inbox-bg-overlay`);
    inboxContentDiv_DOM.append(bgOverlay_DOM);
    
    const header_DOM = document.createElement(`header`);
    header_DOM.classList.add(`inbox-header`);
    bgOverlay_DOM.append(header_DOM);

    const headerLogoH1_DOM = document.createElement(`h1`);
    const headerLogoImg_DOM = document.createElement(`img`);
    headerLogoImg_DOM.src = toDoListLogo;
    headerLogoH1_DOM.classList.add(`header-h1`);
    headerLogoH1_DOM.textContent = `To Do List`;
    headerLogoImg_DOM.classList.add(`header-img`);
    header_DOM.append(headerLogoImg_DOM, headerLogoH1_DOM);

    const sidebar_DOM = document.createElement(`sidebar`);
    sidebar_DOM.classList.add(`inbox-sidebar`);
    bgOverlay_DOM.append(sidebar_DOM);

    const upcomingEventsDiv_DOM = document.createElement(`div`);
    upcomingEventsDiv_DOM.classList.add(`upcoming-events-div`);
    sidebar_DOM.append(upcomingEventsDiv_DOM);

    const sidebarTabsNameArray = ["Inbox", "Today", "This week", "This month"];
    const sidebarTabs_DOM = sidebarTabsNameArray.map(() => document.createElement(`button`));
    const sidebarIcons_DOM = sidebarTabsNameArray.map(() => document.createElement(`img`));
    
    const iconSrcArray = [inboxIcon, calendarTodayIcon, calendarWeekIcon, calendarMonthIcon];

    for (let i = 0; i < 4; i++) {
        sidebarTabs_DOM[i].textContent = sidebarTabsNameArray[i];
        sidebarIcons_DOM[i].src = iconSrcArray[i];
        sidebarIcons_DOM[i].classList.add(`icon`);
        sidebarTabs_DOM[i].append(sidebarIcons_DOM[i]);
    }

    sidebarTabs_DOM.forEach((button) => upcomingEventsDiv_DOM.append(button));

    
}
