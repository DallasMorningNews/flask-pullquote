$("textarea[name='quote']").keyup(function(){
	$("#pullquote .quote").html("<p>"+cleaner($(this).val())+"</p>");
	$("#pullquote .quote").css("font-size",parseInt($( "#size" ).val()));
});


$("#nameEntry").keyup(function(){
	$("#pullquote .name").html( $(this).val() );
});

$("#titleEntry").keyup(function(){
	$("#pullquote .title").html( $(this).val() );
});

$("#cameoSelect").change(function(){
	var name = $("#cameoSelect option:selected").text();
	$("#portrait img").attr("src", $(this).val());
	$("#pullquote .name").html(name);
	$("#nameEntry").val(name);
})

$(function() {

	if($("#pullquote .quote").html() != ""){
		$("#pullquote .quote").html("<p>"+cleaner($("#pullquote .quote").html())+"</p>");
	}
	

    $( "#slider" ).slider({
      value:36,
      min: 18,
      max: 46,
      step: 2,
      slide: function( event, ui ) {
        $( "#size" ).val( ui.value );
        $("#pullquote .quote").css("font-size",parseInt(ui.value)).css("line-height",parseInt(ui.value) * 1.4 + "px");
      }
    });
    $( "#size" ).val( $( "#slider" ).slider( "value" )  );

  });



function cleaner(text){
	return text
		.replace(/"(?=[\w'])/g, "“")
		.replace(/"/g, "”")
		.replace(/(\W)'(?=\w)/g, "$1‘")
		.replace(/'/g, "’")
		.replace(/\r?\n/g, '</p><p>');
}