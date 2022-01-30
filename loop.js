// loop

//  while lopp 

var num = 0;
while (num <= 10) {
    console.log("amare bar bar dekhao", num);
    num++;
}

// for loop

for (var i = 0; i < 15; i++) {
    console.log(i);
    
}

// lop in array 

var array = ["eshak", "zybayer", "masud", "mahmud", "naim vai"]
for (var i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
}

// loop diye bar bar jor bejor sokha ber kora 

// jor sonkha ber kora 
let from = 5;
let to = 10;
for (let i = from; i <= to ; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// biyog namber 
let theke = 2;
let jabe = 20;
for (let i = theke; i < jabe; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
    
}