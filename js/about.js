$(document).ready(function(){
	$('#accordion').accordion({
		heightStyle: "content",
		collapsible: true
	});
	$('#more').hide();
	$('.read-more').click(function(){
		$('#more').toggle();
	});
	$('.prog').click(function(){
		$('.java').animate({width: '100px'});
		$('.ASPNET').animate({width: '40px'});
		$('.HTML_CSS').animate({width: '70px'});
		$('.javascript').animate({width: '50px'});
		$('.jQuery').animate({width: '50px'});
		$('.VBA').animate({width: '80px'});
		$('.SQL').animate({width: '120px'});
		$('.Perl').animate({width: '60px'});
	});
	$('.prof').click(function(){
		$('.web_dev').animate({width: '70px'});
		$('.test').animate({width: '70px'});
		$('.admin').animate({width: '140px'});
		$('.trouble').animate({width: '120px'});
	});
});
