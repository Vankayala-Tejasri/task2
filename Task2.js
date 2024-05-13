i=1
 ran_num=20
 while(i<=5)
     {
         a=parseInt(prompt("enter the number"))
         if(a==ran_num){
             alert("good u choosen the correct number")
         }
         else if(a>ran_num){
             alert("u have choosen the higher number")
         }
        else if(a<ran_num){
             alert("u have choosen the lower number")
        }
        else{
            alert("u ran out chances")
         }
        i++;
     }
