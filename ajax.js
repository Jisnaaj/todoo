

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange=function(){

    if(this.readyState==4&&this.status==200){
      var response = JSON.parse(this.responseText);
      var output="";
      for(var i=0; i<response.length;i++){
        if(response[i].completed===true){
          output += "<input type=checkbox checked disabled >" + "   "+ response[i].title + "</input>" +"<br>"+"<hr>";
          
      }
      else{
        output += "<input type=checkbox>"+"  "+ response[i].title + "</input>" +"<br>"+"<hr>";
      }
    }
      document.getElementById("demo").innerHTML=output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();



