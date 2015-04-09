$(document).ready(function() {
		$('.right-list > li > a').click(function(event){
		event.preventDefault();
 
		// displaying tab content jQuery selector
		var active_tab_selector = $('.right-list > li.active > a').attr('href');					
 
		// actived navigation and remove 'active' css
		var actived_nav = $('.right-list > li.active');
		actived_nav.removeClass('active');
 
		//add 'active' css into clicked navigation
		$(this).parents('li').addClass('active');
 
		//hide displaying tab content
		$(active_tab_selector).removeClass('active');
		$(active_tab_selector).addClass('hide');
 
		//show target tab content
		var target_tab_selector = $(this).attr('href');
		$(target_tab_selector).removeClass('hide');
		$(target_tab_selector).addClass('active');
	     });
	  });