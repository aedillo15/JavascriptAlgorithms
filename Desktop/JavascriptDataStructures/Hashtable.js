// 
function HashTable(size){
    this.buckets = Array(size);
    this.numBuckets = this.buckets.length;
}

function HashNode(key, value, next){
    this.key = key;
    this.value = value;
    this.next = next || null;
}

HashTable.prototype.hash = function(key){
    var total = 0;
    for (var i = 0; i < key.length; i++){
        total += key.charCodeAt(i);
    } 
};

var myHT = new HashTable(30);
console.log(myHT);

console.log('hello world'.charCodeAt(4));
console.log(100 % 30);
