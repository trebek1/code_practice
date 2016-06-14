
function HashTable() { 
	this.table = new Array(137); 
	this.simpleHash = simpleHash; 
	this.showDistro = showDistro; 
	this.put = put;
	//this.get = get;
}
function put(data) {
	var pos = this.simpleHash(data); 
	this.table[pos] = data;
}
function simpleHash(data) {
	var total = 0;
	var P = 31; 
	for (var i = 0; i < data.length; ++i) {
		console.log("What is i ", data[i], " ", "What is ",data.charCodeAt(i))
	          //total += data.charCodeAt(i);
	           total += P*total + data.charCodeAt(i)
	       }
	       console.log('returned ', total%this.table.length)
	return total % this.table.length; 
		
}

function showDistro() { 
	varn=0;
	for (var i = 0; i < this.table.length; ++i) { 
		if (this.table[i] !== undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

// ACTION

var someNames = ["David", "Jennifer", "Donnie", "Raymond","Cynthia", "Mike", "Clayton", "Danny", "Jonathan"]; 
var hTable = new HashTable();
for (var i = 0; i < someNames.length; ++i) {
	hTable.put(someNames[i]);
}
hTable.showDistro();

hTable.put("Raymond");

