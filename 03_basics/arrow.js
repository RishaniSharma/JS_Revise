const user = {
    username: "Rishani",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}

user.username= "Sharma"
// user.welcomeMessage()
// console.log(this);



const chai = () =>{
    console.log('hello');
    
}
chai()



// const addTwo = (num1, num2) => {
//          return num1 + num2
//      }




// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2 )

// const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3, 4))