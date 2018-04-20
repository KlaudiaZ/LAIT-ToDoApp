import $ from 'jquery';

export const createUnfinishedTask = (task) => {
    $('#unfinished').append($('<li class="unfinished">')
        .html(`<input type="checkbox" class="checkbox" id="${task.id}">
    <label class="task" for="${task.id}">
    ${task.task}
    <img src="img/delete.png" class="delete hidden" id="${task.id}-delete">
    </label>`));
}

export const createFinishedTask = (task) => {
    $('#finished').append($('<li class="finished">')
        .html(`<input type="checkbox" class="checkbox" id="${task.id}" checked>
    <label class="task" for="${task.id}">
    ${task.task}
    <img src="img/delete.png" class="delete hidden" id="${task.id}-delete">
    </label>`));
}