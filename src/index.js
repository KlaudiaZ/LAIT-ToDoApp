import './css/index.css';
import './css/other.css';
console.log('JavaScript was attached to the page!');

document.addEventListener('DOMContentLoaded', (e) => {
    console.log('Locked and loaded!');
    getTasksFromServer();
});