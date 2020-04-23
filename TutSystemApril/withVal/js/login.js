jQuery(document).ready(function($) {
  "use strict";
  //Contact
  $('form.login-form').submit(function() {
    var str = $(this).serialize();
    var action = $(this).attr('action');
    if( ! action ) {
      action = "login.php";
    }
    $.ajax({
      type: "POST",
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
	//$(this).find("input, textarea").val("");
	$("#messageFile").animate({
		height: '+=72px'
	}, 300);
		  if(messg == "WRONG")
		  {
			  
			  $('<div class="alert alert-danger">WRONG LOGGIN DETAILS</div>').hide().appendTo('#response').fadeIn(1000);
		  }else if(messg == "LOGGED"){
			  $('<div class="alert alert-success">LOGGED</div>').hide().appendTo('#response').fadeIn(1000);
			  window.location.href ="bookFlight.php";
		  }else{
			  $('<div class="alert alert-danger">FAILED</div>').hide().appendTo('#response').fadeIn(1000);
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
