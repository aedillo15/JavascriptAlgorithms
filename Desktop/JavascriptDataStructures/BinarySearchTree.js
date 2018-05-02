// Factorial (!)
// 4! = 4 * 3 * 2 * 1 = 24
// 3! = 3 * 2 * 1 = 6
/* Recursion example
function func() {
  if(//base case){
    
  }else {
    func()
  }
}
ecursion
function factorial(num){
  if(num === 1){
    return num;
  }else{
    return num * factorial(num -1);
  }
}

factorial(4);
*/
// Binary Search Tree
function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
// Binary Search Tree 
// Insert function in to the BST binary search tree
BST.prototype.insert = function(value) {
  if(value <= this.value){
    if(!this.left) this.left = new BST(value);
    else this.left.insert(value);
  }
  else if (value > this.value){
    if(!this.right) this.right = new BST(value)
    else this.right.insert(value);
  }
};
// Checks whether or not the value that is passed exists in the binary search tree.
BST.prototype.contains = function(value){
  if(value === this.value) return true;
  else if(value < this.value){
    if (!this.left) return false;
    else return this.left.contains(value);
  }
  else if (value > this.value){
    if(!this.right) return false;
    else return this.right.contains(value);
  }
};
// It will touch all the nodes in the tree from least to greatest.
BST.prototype.depthFirstTravesal = function(iteratorFunc){
  if(this.left) this.left.depthFirstTravesal(iteratorFunc);
  iteratorFunc(this.value);
  if(this.right) this.right.depthFirstTravesal(iteratorFunc);
};

var bst = new BST(50);

bst.insert(30);
bst.insert(70);
bst.insert(30);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);
/* Insert method search test 
console.log(bst.right.right); 100
*/
/* Contains method tester
console.log(bst.contains(85)); true
console.log(bst.contains(15)); false
*/
bst.depthFirstTravesal(log);

function log(value){
  console.log(value);
}