$(document).ready( function(){



	function confirm() {
		$("#form").get(0).reset();
		// a <p> tag or something with a thank you message
		$("#form").slideUp('fast');
		$('.confirmation').slideToggle('slow');
	}

	capdisable();

	$('#submit').click(function() 
	{		
		var gresponse = grecaptcha.getResponse();

		
		
			$('#form').attr("action","../mail.php");
			$('#form').ajaxForm(function() { 
				confirm();
				console.log(gresponse.length);
			});
		
	});

});