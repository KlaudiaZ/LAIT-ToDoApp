import $ from 'jquery';
import axios from 'axios';
import config from './config';
import { Server } from 'http';
import { createUnfinishedTask, createFinishedTask } from './list';

export const getTasksFromServer = () => {
    return $.get(config.url.getTask)
        .then((response) => {
            manageTasks(response);
        })
        .catch(() => {
            alert("Error: list loading failed!")
        });
}

const manageTasks = (tasks) => {
    tasks.forEach((task) => {
        task.done ?
            createFinishedTask(task) :
            createUnfinishedTask(task);
    });
}

export const sendTaskToServer = (task) => {
    // $.post(config.url.addTask, {
    //         task: task
    //     })
    //     .then(() => {
    //         location.reload(true);
    //     })
    //     .catch(() => {
    //         alert("Error: your task couldn't be sent!")
    //     });

    axios.post(config.url.addTask, {
            task: task
        })
        .then((response) => {
            console.log('I am working!');
        })
        .catch((error) => {
            console.log('I am not working...');
        });
    location = location;
}