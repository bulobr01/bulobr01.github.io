
moveText= function() {
var litext = document.createTextNode(document.querySelector("#textbox").value);
 var li= document.createElement("li");
 var cbox= document.createElement("input");
 cbox.type="checkbox";
  li.appendChild(cbox);
  li.appendChild(litext);
  li.className= document.querySelector("#priority").value;
  myUl.appendChild(Myli);
  document.ul.appendChild(li);
 
 
 
}
