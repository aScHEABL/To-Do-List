export default function thisWeekPanel () {
    console.log('This is the week panel');

    const listTitleH1 = document.querySelector('[data-list-title-h1]');
    listTitleH1.textContent = 'This Week';
}