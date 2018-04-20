import './css/index.css';
import './css/other.css';
import $ from 'jquery';
import { showDeleteButton } from './misc';
import { getTasksFromServer } from './tasks';
import { bindAddTaskButton } from './list';
console.log('JavaScript was attached to the page!');

$(() => {
    console.log('Locked and loaded!');
    getTasksFromServer()
        .then(showDeleteButton());
    bindAddTaskButton();
});