if (true) {
    let a = 1
    const b = 2
    var c = 3
}

// console.log(a);
// console.log(b);
// console.log(c);


// 7th line will give error because a is defined in block scope and is not accessible outside the if block and the same fpr line 8 
// But 9th line will not throw error because var has global scope and therefore it is advised to not use var for declaring 


let a = 30

if (true) {
    let a = 1
    const b = 2
    var c = 3
    console.log("Inner: ", a); 
}

console.log(a);

