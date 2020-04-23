jQuery(document).ready(function($) {
  "use strict";
  //Contact
  $('form.showFlight-form').submit(function() {
    var str = $(this).serialize();
    var action = $(this).attr('action');
    if( ! action ) {
      action = "showFlight.php";
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
			  $('<div class="alert">REGISTERED</div>').hide().appendTo('#response').fadeIn(1000);
			   window.location.href ="index.html";
		  }else if(messg == "Exist")
		  {
			  $('<div class="alert">Email Exist Already</div>').hide().appendTo('#response').fadeIn(1000);
		  }else if(messg == "same")
		  {
			   $('<div class="alert alert-danger">Locations are the same</div>').hide().appendTo('#response').fadeIn(1000);
		  }
		  else
		  { 
			$('<div class="alert">In Progress</div>').hide().appendTo('#response').fadeIn(1000);  
				window.location.href ="member.html"; 
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
function viewItem(v)
{
	var viewObj = document.getElementById(v);
	viewObj.style.display = "block" ;
	$(viewObj).hide().appendTo(viewObj).fadeIn(1000);	
}
function hideItem(v)
{
	var hideObj = document.getElementById(v);
	hideObj.style.display = "none";
	$(hideObj).hide().appendTo(hideObj).fadeOut(1000);	
}

var formRetriview =  $("#myModal");
function submitDataRetreview()
{
	//alert("submitted");
	formRetriview.submit();
}
// Get the modal
var modal = document.getElementById("myModal");
//var modal = document.querySelector("#myModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function checkTripEquality(start,end)
{
	var startVal = document.getElementById(start);
	var endVal = document.getElementById(end);
	if(startVal.value === endVal.value)
	{
		startVal.value = "";
		endVal.value = "";
		popUpText("same")
	}else{
		//alert("not the same");
	}
}
