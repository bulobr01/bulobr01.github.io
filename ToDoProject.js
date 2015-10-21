
moveText= function() {
var litext = document.createTextNode(document.querySelector("#textbox").value);
 var li= document.createElement("li");
 var cbox= document.createElement("input");
 Ul = document.querySelector("#tasklist");
 Ul.appendChild(li);
 cbox.type="checkbox";
  li.appendChild(cbox);
  li.appendChild(litext);
  li.className= document.querySelector("#priority").value;
  document.body.appendChild(li);
 
 
 
}
