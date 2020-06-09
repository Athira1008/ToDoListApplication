
$(document).ready(function()
	{   
		$('.logIn').click(function()
		{
			
				$('.fold').toggleClass('active');
			    
			
		})
		$('#logbtn').click(function()
		{	
			$('#logform').submit(function(){

			
			// function formValidate(){
				let uname=$("#uname").val();
				let pass=$("#pass").val();
				if((uname.trim()==="")&&(pass.trim()==="")){
					// alert("please fill uname and pass");
					$("#show-error").html("**The User Name and Password Required");
					
					return false;
				}
				else if(uname.trim()===""){
					// alert("invalid")
					$("#show-error").html("**User Name cannot be empty");
					
					return false;
				}
				else if(pass.trim()===""){
					// alert("empty");
					$("#pass-error").html("**Password cannot be empty");
					return false;
				}
				else if((uname=="Admin")&&(pass==12345)){
					alert("you are redirecting to main page");
					window.location.replace('index.html');
					return true;
				}
				else{
					
					// alert("incorrect uname and pass");
					$("#show-error").html("**Incorrect User Name and Password");
					return false;
				}
			});
			// }
			
		});
		
	});
	
	// function formValidate(){
	// 	let uname=$("#uname").val();
	//     let pass=$("#pass").val();
	// 	if((uname.trim()==="")&&(pass.trim()==="")){
	// 		alert("please fill uname and pass");
	// 		return false;
	// 	}
	// 	else if(uname.trim()===""){
	// 		alert("invalid")
	// 		return false;
	// 	}
	// 	else if(pass.trim()===""){
	// 		alert("empty");
	// 		return false;
	// 	}
    //     else if((uname=="Admin")&&(pass==12345)){
	// 		alert("you are redirecting to main page");
	// 		return true;
	// 	}
	// 	else{
			
	// 		alert("incorrect uname and pass");
	// 		return false;
	// 	}
	// }