//your JS code here. If required.
const ul = document.getElementsByTagName("ul")[0];
let displayText="The level of the element is: "
for(let n=0;n<ul.children.length;n++){
  if(ul.children[n].id==="level")
    alert(displayText+(n+1));
}