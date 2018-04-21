import $ from 'jquery';
import { sendTaskToServer, deleteTask, checkTaskStatus, editTask, updateTask } from './taskOps';

export const showDeleteButton = () => {
    $('li').bind('mouseenter mouseleave', (e) => {
        $(e.currentTarget).children('img').toggleClass('hidden');
    });
}

export const bindAddTaskButton = () => {
    $('#add-new-task').click((e) => {
        sendTaskToServer($('#enter-new-task').val());
    });
}

export const bindDeleteButton = () => {
    $('.delete').click((e) => {
        e.preventDefault();
        deleteTask(e.target.id.split("_")[0]);
    });
}

export const bindCheckboxes = () => {
    $('.checkbox').change((e) => {
        checkTaskStatus(e.target.id, e.target.dataset.done);
    });
}

export const preventBoxChangeOnLabelClick = () => {
    $('label').click((e) => {
        e.preventDefault();
    })
}

export const bindDoubleClickOnTask = () => {
    $('label').dblclick((e) => {
        e.preventDefault();
        editTask(e.target.previousElementSibling.id, e.target); //temporary version
    })
}

export const bindEnterOnTextArea = (id) => {
    $('textarea').keypress((e) => {
        if (e.which === 13) {
            e.preventDefault();
            updateTask(id, $("#taskMod").val());
        }
    });
}