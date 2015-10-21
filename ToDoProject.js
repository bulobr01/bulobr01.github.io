
moveText= function() {
var litext = document.createTextNode(document.querySelector("#textbox").value);
 var li= document.createElement("li");
 var cbox= document.createElement("input");
 UL = document.querySelector("#tasklist");
 UL.appendChild(li);
 cbox.type="checkbox";
  li.appendChild(cbox);
  li.appendChild(litext);
  li.className= document.querySelector("#priority").value;
  document.body.appendChild(li);
 
 
 
}
