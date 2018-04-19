import $ from 'jquery';
import config from './config';
import { Server } from 'http';

// 1. dl tasks from Server
// 2. convert them into an html element
// 3. check if they're done or not
// 4. place them in the correct list

export const getTasksFromServer = () => {
    $.get('http://localhost:3000/todo')
        .then((response) => {
            console.log(response);
        });
}