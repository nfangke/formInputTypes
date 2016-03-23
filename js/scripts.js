$(document).ready(function() {
	$("form").submit(function(event) {
		(event).preventDefault();
		var wholeNameInput = $("#wholeName").val();
		var bandInput = $("input:radio[name=band]:checked").val();
		var beverageInput = $("#beverage").val();
    alert(wholeNameInput + bandInput + beverageInput);

		$("#output").text("Hi "+ wholeNameInput + ", you drink " + beverageInput + " and you listen to " + bandInput);

/*

*/

});
});
