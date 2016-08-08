$(document).ready(function () {
    $("#hide-sidebar").click(function () {
        var sideBar = $('#sidebar');
        var content = $('.content');

        var sideBarWidth = +sideBar.css('width').replace('px', '');
        var contentWidth = +content.css('width').replace('px', '');

        var leftPosition = sideBar.css('left').replace('px', '');
        var leftPadding = content.css('padding-left').replace('px', '');

        leftPosition == 0 ? sideBar.animate({'left': '-=' + sideBarWidth + 'px'}) : sideBar.animate({'left': '+=' + sideBarWidth + 'px'});
        leftPadding == 260 ? content.animate({'padding-left': '-=' + sideBarWidth + 'px'}) : content.animate({'padding-left': '+=' + sideBarWidth + 'px'});
    })
});