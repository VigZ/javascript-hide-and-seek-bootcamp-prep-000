 function getFirstSelector(selector){
  var item = document.querySelector(selector);
  return item;
 }

 function nestedTarget(){
   var item = document.querySelector( '#nested .target' );
   return item;
 }

 function increaseRankBy(n){
   var items = document.querySelectorAll("ul.ranked-list li")
   for (var i=0; i<items.length; i++){
     items[i].innerHTML = parseInt(items[i].innerHTML) + n;
   }
 }

 function deepestChild(){
   var node = document.getElementById("grand-node")
   var nextNode = node.children[0]
   while (nextNode){
     node = nextNode
     nextNode = node.children[0]
   }
   return node
 }