$('.lft-hover').hover(function(event) {
	$(this).css('z-index','10')
	$(this).siblings().css('z-index','1')
	$(this).children('').children('').css('color','#fff')
	$(this).siblings().children('').children('').css('color','#000')
	$(this).siblings().children('').children('h3').css('color','#0ba1e4')
	$(this).children('').css({'background':'#0ba1e4','transform':'scale(1.1)'})
	$(this).siblings().children('').css({'background':'#fff','transform':'scale(1)'})
	$(this).children('').children('').children('').children('a').css({'color':'#fff','background':'#0ba1e4','border-color':'#fff'})
	$(this).siblings().children('').children('').children('').children('a').css({'color':'#0ba1e4','background':'transparent','border-color':'#0ba1e4'})
	/*$(this).children('').addClass('cuntent3')
	$(this).addClass('cuntent2')
	$(this).children('').children('').children('a').addClass('cuntent1')*/
});
$('.lft_c .btn').hover(function() {
	$(this).css({'color':'#0ba1e4','background':'#fff'})
}, function() {
	$(this).css({'color':'#fff','background':'#0ba1e4'})
});


