$(document).ready(function () {
    $("#hide-sidebar").click(function () {
        var sideBar = $('#sidebar');
        var sideBarWidth = +sideBar.css('width').replace('px', '');
        var leftPosition = sideBar.css('left').replace('px', '');
        leftPosition == 0 ? sideBar.animate({'left': '-=' + sideBarWidth + 'px'}) : sideBar.animate({'left': '+=' + sideBarWidth + 'px'})
    })
});