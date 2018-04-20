import $ from 'jquery';
import config from './config';
import { Server } from 'http';
import { createUnfinishedTask, createFinishedTask } from './list';

export const getTasksFromServer = () => {
    $.get(config.url.getTask)
        .then((response) => {
            manageTasks(response);
        });
}

const manageTasks = (tasks) => {
    tasks.forEach((task) => {
        task.done ?
            createFinishedTask(task) :
            createUnfinishedTask(task);
    });
}