  // Closure in js

    function counter(){
            let count = 0;
                return function () {
                    count++;
                    return count;
                }
    };

        const increments = counter();

        console.log(increments());

    

        
        function counters(){
                let count = 0;
                    return function () {
                        count--;
                        return count;
                    };
        
        };

        const decrements = counters();
            console.log(decrements());


    
        
        function adding(a,b){
            return function () {
                return (a+b);
            };
        };

        const d = adding(5,4);
        console.log(d());