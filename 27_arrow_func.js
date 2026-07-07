const a = [1,2,3,4,5];

// short hand
const result = (a,b) => {
    console.log(a+b);
}

const add = result(10,3);
console.log(add);

    // full functions
    
    
    function data(x,y){ 
        return (x-y);
    }

    const test = data(4,5);
    console.log(data);


                // single parameter
        const square = x =>{
            return x*x;
        }

            console.log(square(5));

        
    // arrow functions with parameter
          const role = (departments) => {
                    return 'Hello : ${departments}';
                }

        console.log(role("IT Mobile Apps developers"));


        // Implicit returns
           const caculate = (x,y) => (x*y);
        console.log(caculate(4,10));
