// variable can initialzie outdoor block call into place main body

        // Global Scope
    let google = "Tools AI";
        function showCompany(){
                console.log(google);
        }

        showCompany();

            console.log(google);


        let role = "Mobile Developments";
    
    function showName(){
        console.log(role);
    }

            showName();

        console.log(role);



    // Function Scope
        
        function logout(){
            let username = "virakun2026";
                
            console.log(username);
        
        };

        logout()



        // Block scope
            // let & const as block scope
            let studying = "IT";
            console.log(studying);
            let java = "Easy";
            console.log(java);



            
        // Lexical Scope
            let school = "RUPP";
        
        function teacher(){
                let subjects = "Flutter Developers";
                    
                    function student(){
                            console.log(school);
                            console.log(subjects);
                    };

                    student();
        };

            teacher();


        
    