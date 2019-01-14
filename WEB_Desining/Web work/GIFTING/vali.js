// JavaScript Document

function checkfrmval(){				{
	var Name = document.getElementById('Name').value;
	var Email = document.getElementById('email').value;
	var Phone = document.getElementById('Phone').value;
	var comment = document.getElementById('comment').value;
	if (Name == '')
{

	alert('Enter your Name')
submitX = document.getElementById('submit').type = 'button'
		}
	else if (Email == ''){
	alert ('Enter you email')
					
	submitX = document.getElementById('submit').type = 'button'
								}
	else if (Phone =='')
					
		{		alert ('Enter your Phone No.')
	submitX = document.getElementById('submit').type = 'button'									
			}
		else if (Name != '' && Email != '' && Phone != '')			
	{
		var regXName = new RegExp (/^[a-zA-Z ]{2,30}$/)
							
var YName = document.getElementById('Name').value;
var regXEmail = new RegExp (/^[a-z0-9_\+-]+(\.[a-z0-9_\+-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*\.([a-z]{2,4})$/);							var YEmail = document.getElementById('email').value;
var regXphone = new RegExp (/^[0-9]{11}$/);
var YPhone = document.getElementById('Phone').value;
							if(!regXName.test(YName))
			{
			alert ('Please write valid name')
		submitX = document.getElementById('submit').type = 'button'
									}
							else if (!regXEmail.test(YEmail))
									{
										alert ('Please write valid email')
									submitX = document.getElementById('submit').type = 'button'
										}
							else if (!regXphone.test(YPhone))
									
									{
										alert ('Write Correct Phone no with 11 digits')
									submitX = document.getElementById('submit').type = 'button'
										}
							
							
							else
								{
									document.getElementById('Name').value = '';
									document.getElementById('Phone').value = '';
									document.getElementById('comment').value ='';
									document.getElementById('email').value ='';
									
									location.reload();
									window.scrollBy(0,0)
									alert('Data has been sent Successfully')
									
									}
							
										
							
							
							}
					
					
					}
}
					
			
function clearval(){
			

document.getElementById('Name').value = '';
document.getElementById('Phone').value = '';	
document.getElementById('comment').value ='';
document.getElementById('email').value ='';
}
