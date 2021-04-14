// slice, potong mulai dari parameter index pertama s/d index pertama to len
var list = ["a","b","c","d"];
//console.log(list.slice(1,2));
//var b = list.slice(1,3);
//console.log(b);

// splice
var c = list.splice(2,1,"e","f");
//console.log(c);

// copy array, memiliki reference yg sama
var list1 = list;
console.log(list1);
// jika list1 diubah, maka variable source nya ikut berubah (non immutable)
list1.splice(2,1,"z");
console.log(list);

// alternatif copy array.
var list2 = Array.from(list);

// concat array
var listX = [1,2,3];
var listY = [4,5,6];
var listZ = listX.concat(listY);
console.log(listZ);