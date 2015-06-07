$("textarea[name='quote']").keyup(function(){
	$("#pullquote .quote").html("<p>“"+cleaner($(this).val())+"”</p>");
	$("#pullquote .quote").css("font-size",parseInt($( "#size" ).val()));
});


$("#nameEntry").keyup(function(){
	$("#pullquote .name").html( $(this).val() );
});

$("#titleEntry").keyup(function(){
	$("#pullquote .title").html( $(this).val() );
});



$(function() {

	if($("#pullquote .quote").html() != ""){
		$("#pullquote .quote").html("<p>“"+cleaner($("#pullquote .quote").html())+"”</p>");
	}
	

    $( "#slider" ).slider({
      value:36,
      min: 18,
      max: 46,
      step: 2,
      slide: function( event, ui ) {
        $( "#size" ).val( ui.value );
        $("#pullquote .quote").css("font-size",parseInt(ui.value));
      }
    });
    $( "#size" ).val( $( "#slider" ).slider( "value" )  );

  });



function cleaner(text){
	return text
		.replace(/"(?=\w|$)/g, "“")
		.replace(/"/g, "”")
		.replace(/\s'(?=\w|$)/g, "‘")
		.replace(/'/g, "’")
		.replace(/\r?\n/g, '</p><p>');
}