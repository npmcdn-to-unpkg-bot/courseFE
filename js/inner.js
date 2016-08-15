var drawSkills = function() {
    $(".skill-bar").each(function(i) {
        $(this).animate({
            'width': $(this).attr('value') + '%'
        }, 500);
    });
};
var pointSection = function(selector){
	var resultList = [];
	$(selector).each(function(){
		resultList.push($(this).offset().top);
	});

	var activePoint = $(window).scrollTop() + 100;
	resultList.push(activePoint);
	resultList.sort((a, b) => a - b);
	
	var activeIndex = resultList.indexOf(activePoint);
	$('.sidebar-table tr:nth-child(' + (activeIndex - 1) + ')').removeClass('green');
	$('.sidebar-table tr:nth-child(' + (activeIndex + 1) + ')').removeClass('green');
	$('.sidebar-table tr:nth-child(' + activeIndex + ')').addClass('green');
	
	if($(window).scrollTop() == document.body.scrollHeight - document.body.clientHeight){
		$('.sidebar-table tr:nth-child(' + (activeIndex) + ')').removeClass('green');
		$('.sidebar-table tr:last-child').addClass('green');
	}

	return resultList.indexOf(activePoint);
};

$(document).ready(function() {
    //Show-hide sidebar section
    $("#hide-sidebar").click(function() {
        var sideBar = $('#sidebar');
        var content = $('.content');

        var sideBarWidth = +sideBar.css('width').replace('px', '');
        var contentWidth = +content.css('width').replace('px', '');

        var leftPosition = sideBar.css('left').replace('px', '');
        var leftPadding = content.css('padding-left').replace('px', '');

        leftPosition == 0 ? sideBar.animate({
            'left': '-=' + sideBarWidth + 'px'
        }) : sideBar.animate({
            'left': '+=' + sideBarWidth + 'px'
        });
        leftPadding == 260 ? content.animate({
            'padding-left': '-=' + sideBarWidth + 'px'
        }) : content.animate({
            'padding-left': '+=' + sideBarWidth + 'px'
        });
    });
	

    // Go up button section
    $(window).on('scroll', function() {
        var goUpButton = $('#go-up');
        $(window).scrollTop() > 100 ? goUpButton.addClass('show') : goUpButton.removeClass('show');
		
		//Skill bars		
		if($(window).scrollTop() > $('.skill-bar:first-child').offset().top - $(window).height() + $('.skill-charts').height()){	
			drawSkills();
		}
			
		pointSection('.headings');
    });

    $('#go-up').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    //Portfolio
    $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.portfolio-filter').each(function() {
        $(this).on('click', function() {
            $('.grid').isotope({
                filter: $(this).attr('value')
            });
        });
    });
	
	$('.portfolio-filter').on('click', function(){
		$('.portfolio-filter').each(function(){
			$(this).removeClass('green');	
		});
		$(this).addClass('green');
	});
	
	$('.grid-item').hover( function(){
		$(this).find('.item-info').animate({'top': '0'}, 200);
	},
	function(){
		$(this).find('.item-info').animate({'top': '300px'}, 200);
	});
	
	$('.item-info h2:last-child').hover(function(){
		$(this).css('text-decoration', 'underline');
	},
	function(){
		$(this).css('text-decoration', 'none');
	});
});