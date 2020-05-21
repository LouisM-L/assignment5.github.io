function login()
{
   if(document.getElementById("log in").innerHTML === "LOG IN")
   {
       document.getElementById("log in").innerHTML = "LOG OUT";
       console.log("logged in");
   }
   else
   {
       document.getElementById("log in").innerHTML = "LOG IN";
       console.log("logged out");
   }
}