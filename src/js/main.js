$(document).ready(function() {

	$("#btnDarkMode").on("click", darkMode);
	titleTypeWriter();
	
});
  
function darkMode()
{
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
}

function titleTypeWriter()
{
	var typed = new Typed('.titleTypeWriter', {
		strings: ["Software Developer", "Web Developer", "Gamer"],
		typeSpeed: 100,
		backSpeed: 100,
		loop:true,
	});
}
