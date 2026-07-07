  // async and await with Fetch API
  async function Github() {
        try{
            const respone = await fetch("https://jsonplaceholder.typicode.com/users");

                console.log(respone);
        }catch(error){
                console.log(error);
        }
  };

    Github();



        // Example 2
        async function MobileApps() {
            // try-catch
            try {
                const data = await fetch("https://jsonplaceholder.typicode.com/users");

                console.log(data);
            } catch (error) {
                console.log(error);
            }
        };

        MobileApps();
