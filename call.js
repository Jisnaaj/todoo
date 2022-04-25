const form = document.getElementById("form");
let username = document.getElementById("username");
let pwd = document.getElementById("password");
let error=document.getElementById("error");

function validate(callback){
   
      if(username.value.trim()==="")
    {
        error.innerHTML="username cannot be empty";
        error.style.color="aqua";
        return false;
    }
    
    else if (pwd.value.trim()==="")
    {
        error.innerHTML="password cannot be empty";
        error.style.color="aqua";
        return false;
    }

   else{
       callback(validate);
 } } 

function redirect(){

    if(username.value!=="admin" || pwd.value!=="12345")
    {
        error.innerHTML="incorrect username or password";
        error.style.color="aqua";
        return false; 
    }
    else{
        
        return validate(redirect);
    }
}
form.addEventListener('submit',function(event){
    if(!validate(redirect))
    {
        event.preventDefault();
    }
    
});



