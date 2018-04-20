import './css/index.css';
import './css/other.css';
import $ from 'jquery';
import { showDeleteButton, bindAddTaskButton, bindDeleteButton, bindCheckboxes } from './binds';
import { getTasksFromServer } from './tasks';
console.log('JavaScript was attached to the page!');

$(() => {
    console.log('Locked and loaded!');
    getTasksFromServer()
        //.then(showDeleteButton()); - not working for some reason
        //.then(bindDeleteButton());
        //.then(bindCheckboxes());
    bindAddTaskButton();
});