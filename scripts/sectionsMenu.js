$(document).ready(function () {


	if ($(window).width() <= 426) {
		$("#left-site section aside").hide();
		$("#left-site section .arrow").css({
			top: "-10px"
		});
	};
	
	$("#left-site section h2").click(function () {
		var speedAnimate = 400;
		var sectionID = $(this).parent().attr("id");
		
		
		
		
		
		
		
		$("#"+sectionID + " aside").slideToggle(speedAnimate);

		if ($("#" + sectionID + " .arrow").css("top") == "-10px") {
			$("#" + sectionID + " .arrow").animate({
				top: "+=9px",
				opacity: "1"
			}, speedAnimate);
//			alert("OK");

		} else {
			$("#" + sectionID + " .arrow").animate({
				top: "-10px",
				opacity: "0"
			}, speedAnimate);
		}

		//		alert(sectionID + " aside");
	});
	
	
});
