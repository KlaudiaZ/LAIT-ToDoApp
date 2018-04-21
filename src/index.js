import './css/index.css';
import './css/other.css';
import $ from 'jquery';
import { showDeleteButton, bindAddTaskButton, bindDeleteButton, bindCheckboxes, preventBoxChangeOnLabelClick, bindDoubleClickOnTask } from './binds';
import { getTasksFromServer } from './taskOps';
console.log('JavaScript was attached to the page!');

$(() => {
    console.log('Locked and loaded!');
    getTasksFromServer()
        //.then(showDeleteButton()) - not working for some reason
        //.then(bindDeleteButton())
        //.then(bindCheckboxes())
        //.then(preventBoxChangeOnLabelClick())
        //.then(bindDoubleClickOnTask());
    bindAddTaskButton();
});