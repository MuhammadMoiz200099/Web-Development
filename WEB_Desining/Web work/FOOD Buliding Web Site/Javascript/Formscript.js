function validate()
{
    var moiz = document.getElementById("moiz");
    
    
    
    
    var user = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var comt = document.getElementById("comt").value;
    
    
    
    
    
    if(user == "" || email == "" || pass == "")
    {
            moiz.innerHTML='<span style="color:darkred; font-weight: bold;">Please! Fill all the required field</span';
    
    }
    
    
    
    else if(user.length < 3)
        {
            moiz.innerHTML='<span style="color:darkred; font-weight: bold;">Your Username is too Short</span';
            
        }

    
    
    else if(email.length < 3)
        {
            moiz.innerHTML='<span style="color:darkred; font-weight: bold;">Your Email is too Short</span';
            
        }
    
    
    
    else if( pass.length < 8 )
        {
            moiz.innerHTML='<span style="color:darkred; font-weight: bold;">password should be more than 8 digits</span';
                
        }
   
    
    else
        {
            
            moiz.innerHTML='<span style="color:green; font-weight: bold;">Form Submited Successfully!</span';
            
        }
    
}