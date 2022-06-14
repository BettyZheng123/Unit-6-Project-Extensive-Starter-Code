$(".part-Two-Yes").hide();
$(".story-Ending-Yes").hide();
$(".yes-button").click(function(){
    $(".part-Two-Yes").show();
    $(".no-button").hide(); 
    $(".yes-button").hide(); 
    $(".title").hide();
    $(".firstImage").hide();
});

$(".no-button").click(function(){
    $(".no-button").hide(); 
    $(".yes-button").hide(); 
    $(".title").hide();
    $(".firstImage").hide();
    $(".part-Two-No").show();
});

    $(".part-Two-No").dblclick( function(){
    $(".part-Two-No").hide();
    $(".story-Ending-No").show();
        
});
$(".treasure-img1").dblclick(function(){
    $(".part-Two-Yes").hide();
    $(".story-Ending-Yes").show();
});

$(".treasure-img1").hover(function(){
$(".treasure-img1").css("border", "5px solid blue");
    
});

$(".Part-Two-No").dblclick(function(){
$(".story-Ending-No").show();
  

});