$("#numEntry").keyup(function(){
	$("#pullquote .number").html($(this).val());
	$("#pullquote .number").css("font-size",parseInt($( "#numSize" ).val()));
	$("#pullquote .number").css("line-height",parseInt($( "#numSize" ).val())*.85 + "px");

});


$("#contextEntry").keyup(function(){
	$("#pullquote .context").html( cleaner($(this).val()) );
	$("#pullquote .context").css("font-size",parseInt($( "#txtSize" ).val()));
	$("#pullquote .context").css("line-height",parseInt($( "#txtSize" ).val())* 1.25 + "px");

});

$("#nameEntry").keyup(function(){
	$("#pullquote .name").html( $(this).val() );
});

$("#titleEntry").keyup(function(){
	$("#pullquote .title").html( $(this).val() );
});






$(function() {

	if($("#pullquote .number").html() != ""){
		$("#pullquote .number").html($("#pullquote .number").html());
	}
	

    $( "#numSlider" ).slider({
      value:84,
      min: 56,
      max: 170,
      step: 2,
      slide: function( event, ui ) {
        $( "#numSize" ).val( ui.value );
        $("#pullquote .number").css("font-size",parseInt(ui.value));
        $("#pullquote .number").css("line-height",parseInt($( "#numSize" ).val())*.85 + "px");
        $("#pullquote .context").css("padding-top", parseInt(ui.value) * .068 + "px" );
      }
    });
    $( "#numSize" ).val( $( "#numSlider" ).slider( "value" )  );

    $( "#txtSlider" ).slider({
      value:30,
      min: 16,
      max: 42,
      step: 2,
      slide: function( event, ui ) {
        $( "#txtSize" ).val( ui.value );
        $("#pullquote .context").css("font-size",parseInt(ui.value));
        $("#pullquote .context").css("line-height",parseInt($( "#txtSize" ).val())* 1.25 + "px");

      }
    });
    $( "#txtSize" ).val( $( "#txtSlider" ).slider( "value" )  );

  });



function cleaner(text){
	return text
		.replace(/"(?=\w|$)/g, "“")
		.replace(/"/g, "”")
		.replace(/\s'(?=\w|$)/g, "‘")
		.replace(/'/g, "’")
		.replace(/\r?\n/g, '</p><p>');
}

