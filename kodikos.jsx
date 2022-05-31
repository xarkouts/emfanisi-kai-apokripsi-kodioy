let kodikos=document.getElementById("kodikos");
let eikona=document.getElementById("eikona");

eikona.addEventListener("click",function(){

     if(kodikos.type=="password"){
         kodikos.type="text";
         eikona.src="2.png";
     }else if(kodikos.type=="text"){
         kodikos.type="password";
         eikona.src="1.png";
     }

});
