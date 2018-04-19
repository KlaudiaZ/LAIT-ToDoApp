import './css/index.css';
import './css/other.css';
import $ from 'jquery';
import { getTasksFromServer } from './getTasks';
console.log('JavaScript was attached to the page!');

$(() => {
    console.log('Locked and loaded!');
    getTasksFromServer();
});