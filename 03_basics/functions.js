
// ...num1 here ... can be 'spread' operator as well as 'rest' operator 
function addCartItems(...num1){
    return num1
}
// console.log(addCartItems(10,22,13,9,6,7,5,1,26));


// handling object with function/ passing object to function 
const item = {
    itemName: "book",
    price: 299
}

function handleObject(anyItem){
    console.log(`the item is ${anyItem.itemName} and the price is ${anyItem.price}`);
}


// handleObject(item)


// handleObject({
//     itemName: "chair",
//     price: 400
// })


// handling array with function/ passing array to function 
const newArray = [200, 400, 600, 800]

function getSecondValue(anyArray){
    return anyArray[1]
}

// console.log(getSecondValue(newArray));

// console.log(getSecondValue([100, 200, 300, 400]));
