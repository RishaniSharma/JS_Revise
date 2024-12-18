// IIFE = Immediately Invoked Function Expression 


// named iife 
(function chai(){
    console.log(`hello, DB is Connected.`);
})();


// this ; is very important otherwise it will show error, it is to end the execution of iife 
// simple / unnamed iife 
((name)=>{
    console.log(`hello again, DB is connected ${name}`);
    
})('Rishani')