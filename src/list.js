import $ from 'jquery';
import { sendTaskToServer } from './taskOps';

export const createUnfinishedTask = (task) => {
    $('#unfinished').append($('<li class="unfinished">')
        .html(`<input type="checkbox" class="checkbox" id="${task.id}" data-done="undone">
    <label class="task" for="${task.id}">
    ${task.task}</label>
    <img src="img/delete.png" class="delete hidden" id="${task.id}_delete">`));
}

export const createFinishedTask = (task) => {
    $('#finished').append($('<li class="finished">')
        .html(`<input type="checkbox" class="checkbox" id="${task.id}" data-done="done" checked>
    <label class="task" for="${task.id}">
    ${task.task}</label>
    <img src="img/delete.png" class="delete hidden" id="${task.id}_delete">`));
}

export const turnTaskIntoTextarea = (task) => {
    const oldTask = $(task).text().trim();
    $(task).html(`<textarea id="taskMod">${oldTask}</textarea>`);
    $('textarea').focus().mouseleave((e) => {
        $(task).html(" " + oldTask);
    });
}