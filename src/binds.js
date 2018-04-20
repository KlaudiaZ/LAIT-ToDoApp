import $ from 'jquery';
import { sendTaskToServer, deleteTask, checkTaskStatus } from './tasks';

export const showDeleteButton = () => {
    $('label').bind('mouseenter mouseleave', (e) => {
        $(e.currentTarget).children().toggleClass('hidden');
    });
}

export const bindAddTaskButton = () => {
    $('#add-new-task').bind('click', (e) => {
        sendTaskToServer($('#enter-new-task').val());
    });
}

export const bindDeleteButton = () => {
    $('.delete').bind('click', (e) => {
        e.preventDefault();
        deleteTask(e.target.id.split("_")[0]);
    });
}

export const bindCheckboxes = () => {
    $('.checkbox').bind('change', (e) => {
        checkTaskStatus(e.target.id, e.target.dataset.done);
    });
}