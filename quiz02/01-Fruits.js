const fruits = ["Jeruk", "Mangga", "Jambu", "Durian", "Rambutan"];

//a. push
fruits.push("Anggur");
fruits.push("Banana");
fruits.push("Sirsak");
console.log(fruits);

//b. pop
fruits.pop()
console.log(fruits);

//c. splice
fruits.splice(2,1);
console.log(fruits);

//d. hapus semua kecual jeruk, mangga, banana
fruits.splice(2,3);
console.log(fruits);

// e. tambahkan rambutan & bengkuang
fruits.splice(2,0,"Rambutan","Bengkuang");
console.log(fruits);

// f. replace banana dengan nangka
fruits.splice(4,1,"Nangka")
console.log(fruits);

//g. concat
const sayur = ["Kangkung", "Bayam", "Tomat", "Bawang","Bayam"];
const veges = fruits.concat(sayur);
console.log(veges);

//h. reverse array
veges.reverse("");
console.log(veges);

//i. switch
function switchIndex (arr,p1,p2){
    let idxA =undefined;
    let idxB=undefined;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i]===p1){
            idxA=i;
        }else if(arr[i]===p2){
            idxB=i;
        }
    }
    arr[idxA] = p2;
    arr[idxB] = p1;
    return arr;
}

console.log(switchIndex(veges,'Tomat','Jeruk'));