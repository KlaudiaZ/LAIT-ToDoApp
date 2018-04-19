import $ from 'jquery';

export const showDeleteButton = () => {
    $('label').bind('mouseenter mouseleave', (e) => {
        $(event.currentTarget).children().toggleClass('hidden');
    });
}