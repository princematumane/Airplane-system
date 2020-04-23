jQuery(document).ready(function($) {
  "use strict";
  //Contact
  $('form.register-form').submit(function() {
    var str = $(this).serialize();
    var action = $(this).attr('action');
    if( ! action ) {
      action = "register.php";
    }
    $.ajax({
      type: "GET",
      url: action,
      data: str,
      success: function(msg) {
       // alert(msg);
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
		  if(messg == "OK"){
			  $('<div class="alert alert-success">REGISTERED</div>').hide().appendTo('#response').fadeIn(1000);
			   window.location.href ="index.html";
		  }else if(messg == "Exist")
		  {
			  $('<div class="alert alert-danger">Email Exist Already</div>').hide().appendTo('#response').fadeIn(1000);
		  }else if(messg == "NOT MATCH")
		  {
			   $('<div class="alert alert-danger">PASSWORDS DO NOT MATCH</div>').hide().appendTo('#response').fadeIn(1000);
		  }
		  else
		  { 
			$('<div class="alert alert-danger">FAILED TO REGISTERED</div>').hide().appendTo('#response').fadeIn(1000);  
				window.location.href ="register.html"; 
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
