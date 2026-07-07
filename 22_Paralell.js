   // Paralells executions in js


function completed1(){
        return new Promise((resolve)=>{
            setInterval(() => {
                resolve("Succesfully task1");
            }, 1000); 
        });
}


function completed2(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Succesfully task2!");
        }, 1000);
    });
};

    async function runTask() {

            const [finish1 , finish2] = await Promise.all([
                    completed1,
                    completed2,
                ]
                
            );
            
            console.log(finish1);
            console.log(finish2);

    }

        runTask();
