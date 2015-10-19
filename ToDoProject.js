changeText= function() {
   t = document.querySelector("#list")
 trow = document.createElement("tr")
  td = document.createElement("td")
   contents = document.createTextNode(Text())
  td.appendChild(contents)
 trow.appendChild(td)
  t.appendChild(trow)
}
