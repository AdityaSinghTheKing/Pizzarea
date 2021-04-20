array_name_of_students=[];
function submit(){
    var displaystudentarray = [];
     for (var j =1 ; j<=4 ; j++){
          var studentnames = document.getElementById("name_of_the_student_"+j).value ;
          console.log(studentnames);
          array_name_of_students.push(studentnames) 
     }
     console.log(array_name_of_students);
     for (var k=0 ; k < array_name_of_students.length;k++){
         displaystudentarray.push("<h4>Order "+array_name_of_students[k]+"</h4>")
         console.log(displaystudentarray)
     }
     document.getElementById("display_name_with_commas").innerHTML=displaystudentarray;
     var removecommas=displaystuddntarray.join("")
     console.log(removecommas)
     document.getElementById("display_name_without_commas").innerHTML=removecommas
     document.getElementById("submit_button").style.display="none"
     document.getElementById("sort_button").style.display="inline-block"

    
}
function sorting(){
   array_name_of_students.sort()
   console.log(array_name_of_students);
   var sortednames= [];
   for (var k=0 ; k < array_name_of_students.length;k++){
       sortednames.push("<h4>Name-"+array_name_of_students[k]+"</h4>");
       console.log(sortednames);
    
   }
   var removecommas=sortednames.join("");
   console.log(removecommas)
   document.getElementById("display_name_without_commas").innerHTML=removecommas;
   document.getElementById("display_name_with_commas").style.display="none";
   

}


