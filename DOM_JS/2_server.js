// Promise in Javascripts
// Promise in js represent to result of asynchronize operations ->API Call
// Database acessing / file reading

// Good syntax

        // basic syntax
let myPromise = new Promise((resolve, reject) =>{
    
        // store data
        let success = true;

            // checking validated
            if(success){
                    resolve("Operation succesfully...!");
            }else{
                reject("Error went wrong...!");
            };
});


        // concepts 3 types
             // - Pending : still working
             // - Fullfilll : success
             // - Rejection : error

    console.log("====================");

let newPromise = new Promise((resolve, reject)=>{
        
        // store variable
        let validate = false;

            if(validate){
                resolve("Operations succesfully...!");
            }else{
                reject("Operation failure....!");
            };
});


// using to .then() and .catch()
myPromise
    .then((result)=> {
        console.log(result);   // success message
    })
    .catch((error)=> console.log(error));  // error message



        // using to .then() .catch()

 

    newPromise.then((p)=>{
        console.log(p);
    })
    .catch((e)=>{
        console.log(e);
    });

    console.log("=======================");
