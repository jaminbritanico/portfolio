$("#btnDarkMode").click(function(){
	$("body").toggleClass("darkMode");
	if($("body").hasClass("darkMode"))
		$("#btnDarkMode").removeClass("bxs-moon").addClass("bxs-sun");
	else
		$("#btnDarkMode").removeClass("bxs-sun").addClass("bxs-moon");
});
  