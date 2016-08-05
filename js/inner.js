$(document).ready(function () {
    $("#hide-sidebar").click(function () {
        $("#sidebar").animate({
            width: 'toggle'
        }, 100);
    });
});