$(document).ready(function () {
    //Show-hide sidebar section
    $("#hide-sidebar").click(function () {
        var sideBar = $('#sidebar');
        var content = $('.content');

        var sideBarWidth = +sideBar.css('width').replace('px', '');
        var contentWidth = +content.css('width').replace('px', '');

        var leftPosition = sideBar.css('left').replace('px', '');
        var leftPadding = content.css('padding-left').replace('px', '');

        leftPosition == 0 ? sideBar.animate({'left': '-=' + sideBarWidth + 'px'}) : sideBar.animate({'left': '+=' + sideBarWidth + 'px'});
        leftPadding == 260 ? content.animate({'padding-left': '-=' + sideBarWidth + 'px'}) : content.animate({'padding-left': '+=' + sideBarWidth + 'px'});
    });

    // Go up button section
    $(window).on('scroll', function () {
        var goUpButton = $('#go-up');
        $(window).scrollTop() > 100 ? goUpButton.addClass('show') : goUpButton.removeClass('show');
    });

    $('#go-up').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
	
	//Skill bars	
	$(".skill-bar").each(function(i){
		var skillBarWidth = Math.floor((Math.random()* 90 + 10)).toString();
		$(this).animate({'width' : $(this).attr('value') + '%'}, 500);
	});
	
	//Portfolio
	$('.grid').isotope({
	  itemSelector: '.grid-item',
	  layoutMode: 'fitRows'
	});	
});	