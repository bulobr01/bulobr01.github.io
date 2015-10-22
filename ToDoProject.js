
moveText= function() {
var litext = document.createTextNode(document.querySelector("#textbox").value);
 var li= document.createElement("li");

 var cbox= document.createElement("input");


 cbox.type="checkbox";
  li.appendChild(cbox);
  li.appendChild(litext);
  myPriority= document.querySelector("#priority");
 UL = document.querySelector("#tasklist");
 UL.appendChild(li);
  li.className= document.querySelector("#priority").value;
  li.classList.add(myPriority.value);
  document.body.priority.appendChild(li);
  document.body.ul.appendChild(li);
 
 
 
}
