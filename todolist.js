
//line through
$("ul").on("click","li",function(){
	if($(this).css("color")=="rgb(128, 128, 128)"){
		$(this).css({
		color:"black",
		textDecoration:"none"
	})
	}
	else{
	$(this).css({
		color:"gray",
		textDecoration:"line-through"
	});
}
});

//for removing any todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();
});

//for adding any todos
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var todoText =$(this).val();
		$("ul").append("<li><span><i class='fal fa-trash-alt'></i></span>"+todoText+"</li>")
		$(this).val("");
	}
})

$(".fa-plus").on("click",function(){
	$("input").fadeToggle(200);
});
