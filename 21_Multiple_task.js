    // Multiple async in Js

    
    function task1(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve("Task1 Completed...!");     
            }, 1000);
        });
    };


    function task2() {
        return new Promise((reject)=>{
            setTimeout(() => {
                reject("Task2 Fail...");
            }, 2000);
        });
    };

        
    async function result() {
        const result1 = await task1();
            console.log(result1);
        const result2 = await task2();
            console.log(result2);

    };


    result();
