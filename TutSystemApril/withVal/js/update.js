jQuery(document).ready(function($) {
  "use strict";
  //Contact
  $('form.update-form').submit(function() {
    var str = $(this).serialize();
    var action = $(this).attr('action');
    if( ! action ) {
      action = "update.php";
    }
    $.ajax({
      type: "GET",
      url: action,
      data: str,
      success: function(msg) {
        //alert(msg);
		popUpText(msg);
      }
    });
    return false;
  });

});
function popUpText(messg)
{
    //alert(messg);
	//$(this).find("input, textarea").val("");
	$("#messageFile").animate({
		height: '+=72px'
	}, 300);
		  if(messg == "OK")
		  {
			  $('<div class="alert alert-success">DETAILS UPDATED</div>').hide().appendTo('#response').fadeIn(1000);
			   window.location.href ="index.html";
		  }else if(messg == "NOT MATCH"){
			  $('<div class="alert alert-danger">PASSWORD NOT MATCH</div>').hide().appendTo('#response').fadeIn(1000);
		  }else{
			  $('<div class="alert alert-danger">FAILED TO UPDATE DETAILS</div>').hide().appendTo('#response').fadeIn(1000);
		  }
	$(".alert").delay(3000).fadeOut(
		  "normal",
		function(){
			$(this).remove();
		});
	$("#messageFile").delay(4000).animate({
		height: '-=72px'
	}, 300);
}
