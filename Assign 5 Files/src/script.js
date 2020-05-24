var loggedin = false
function login()
{
   if(document.getElementById("log in").innerHTML === "LOG IN")
   {
       document.getElementById("log in").innerHTML = "LOG OUT";
       console.log("logged in");
       loggedin = true;
       FormSection(loggedin);
       
   }
   else
   {
       document.getElementById("log in").innerHTML = "LOG IN";
       console.log("logged out");
       loggedin = false;
       FormSection(loggedin);
   }
}

function FormSection(loggedin)
{
    if(loggedin === true)
    {
        document.getElementById("form-section").style.display = "inherit";
    }
    if(loggedin === false)
    {
        document.getElementById("form-section").style.display = "none";
    }
    
}

function NewMeal()
{
    
}