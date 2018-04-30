// LinkedList function with a head and a tail not passed through because nothing to put in head or tail
function LinkedList (){
  this.head = null; 
  this.tail = null;
}
// Node function that passes a value, next and prev (nodes)
function Node(value, next, prev){
  this.value = value; 
  this.next = next;
  this.prev = prev;
}
// addToHead is function that is going to add a head to the LinkedList
LinkedList.prototype.addToHead = function(value) {
  // newNode will get the value of the new node,
  var newNode = new Node(value, this.head, null);
  if (this.head) this.head.prev = newNode;
  else this.tail = newNode;
  this.head = newNode;
};
// addToTail is function that is going to add a tail to the LinkedList
LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
};
// removeHead is function that is going to remove a head from the LinkedList
LinkedList.prototype.removeHead = function(){
  if(!this.head) return null;
  var val = this.head.value;
  this.head = this.head.next;
  if(this.head) this.head.prev = null;
  else this.tail = null;
  return val;
};
// removeTail is a function that will be removing the tail from the LinkedList
LinkedList.prototype.removeTail = function(){
  if(!this.tail) return null;
  var val = this.tail.value;
  this.tail = this.tail.prev;
  if(this.tail) this.tail.next = null;
  else this.head = null;
  return val;
};
// search is function that will be searching from the LinkedList
LinkedList.prototype.search = function(searchValue){
  var currentNode = this.head;
  while(currentNode){
    if (currentNode.value === searchValue) return currentNode.value;
    currentNode = currentNode.next;
  }
  return null;
};
var myLL = new LinkedList();

myLL.addToHead(123);
myLL.addToHead(70);
myLL.addToHead('hello');
myLL.addToTail(19);
myLL.addToTail('world');
myLL.addToTail(20);

console.log(myLL.search(70));
/* removeTail method testing
var ll = new LinkedList();
ll.addToHead('one');
ll.addToHead('two');
ll.addToHead('three');

console.log(ll.removeTail());
*/
/* removeHead method testing 
var ll = new LinkedList();

ll.addToHead(1000);
ll.addToHead(2000);
ll.addToTail(3000);
ll.removeHead();
console.log(ll.removeHead());
*/
/* addToTail and addToHead testing 
var myLL = new LinkedList();

myLL.addToTail(10);
myLL.addToTail(20);
myLL.addToTail(30);
myLL.addToHead(100);

//console.log(myLL.tail.prev);
//console.log(myLL.tail.prev.prev);
console.log(myLL);
*/
/* addToHead Test 
var ll = new LinkedList();

ll.addToHead(100);
ll.addToHead(200);
ll.addToHead(300);

console.log(ll);
*/
/* Adding a node to head functionality */

/* Node testing 
var node1 = new Node(100, 'node2', null);

console.log(node1);
*/
/* Var named LL assigned to object of new LinkedList() 
var LL = new LinkedList();
var userList = new LinkedList();
var toDoList = new LinkedList();

console.log(LL);
*/