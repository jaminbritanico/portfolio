$(window).on('resize', function() {
	resize()
});

function resize() {
	
}

$("#btnDarkMode").click(function(){
	if($("body").hasClass("bodyDarkMode"))
	{
		$("body").removeClass("bodyDarkMode");
		$("#btnDarkMode").removeClass("bxs-sun").addClass("bxs-moon");
	}
	else
	{
		$("body").addClass("bodyDarkMode");
		$("#btnDarkMode").removeClass("bxs-moon").addClass("bxs-sun");
	}
});
  