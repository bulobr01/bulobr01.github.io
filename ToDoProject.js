
moveText= function() {
var litext = document.createTextNode(document.querySelector("#textbox").value);
 var li= document.createElement("li");

 var cbox= document.createElement("input");
 var menu= document.createElement("select");


 cbox.type="checkbox";
  li.appendChild(cbox);
  li.appendChild(litext);
  li.appendChild(menu);
  myPriority= document.querySelector("#priority");
  myPriority= document.appendChild(li);
 UL = document.querySelector("#tasklist");
 UL.appendChild(li);
  document.body.ul.appendChild(li);
 
 
 
}
