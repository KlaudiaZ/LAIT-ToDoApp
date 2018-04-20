import './css/index.css';
import './css/other.css';
import $ from 'jquery';
import { showDeleteButton } from './misc';
import { getTasksFromServer } from './tasks';
console.log('JavaScript was attached to the page!');

$(() => {
    console.log('Locked and loaded!');
    getTasksFromServer();
    showDeleteButton();
});