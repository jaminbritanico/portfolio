$("#btnDarkMode").click(function(){
	$("body").toggleClass("darkMode");
	if($("body").hasClass("darkMode"))
	{
		setParticles("#FFFAFA");
		$("#btnDarkMode").removeClass("bxs-moon").addClass("bxs-sun");
	}
	else
	{
		setParticles("#1E1E1E");
		$("#btnDarkMode").removeClass("bxs-sun").addClass("bxs-moon");
	}
});
  
