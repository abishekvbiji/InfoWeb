$( document ).ready(function() {
	$("#reg_form").hide();

	$("#reg_drpbtn").click(function() {
		$("#home_content").hide();
		$("#reg_form").show();
		$("footer").css("background-color","#ececec");
	});

	$("#home_btn").click(function() {
		$("#home_content").show();
		$("#reg_form").hide();
	});
});