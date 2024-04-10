$(document).ready(function() {
	$("#btnDarkMode").on("click", darkMode);
	navbarScrollBar();
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

function navbarScrollBar()
{
	var checkScrollBar = function(){
		var scroll = $(window).scrollTop();
		if(scroll >= 1){
			$('.navbar').addClass("navbar-transparent");
		} else{
			$('.navbar').removeClass("navbar-transparent");
		}
	}
	$(window).on('load resize scroll', checkScrollBar);
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
