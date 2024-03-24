$("#btnDarkMode").click(function(){
	if($("body").hasClass("bodyDarkMode"))
	{
		$("body").removeClass("bodyDarkMode");
		$("#btnDarkMode > i").addClass("bxs-moon");
		$("#btnDarkMode > i").removeClass("bxs-sun");
	}
	else
	{
		$("body").addClass("bodyDarkMode");
		$("#btnDarkMode > i").removeClass("bxs-moon");
		$("#btnDarkMode > i").addClass("bxs-sun");
	}
});
  