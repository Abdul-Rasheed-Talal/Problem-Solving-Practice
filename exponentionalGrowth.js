// Implement an exponential backoff strategy that doubles the wait time between retries, starting from 1 second, but stops after 5 retries.
let wait_time = 1000
let retries = 5

let attempts = 0


    setInterval(() => {
        console.log("wait before retrying");
        console.log("Attempt", attempts+1 , "-wait time" , wait_time)
        attempts+=1
        wait_time*=2
        if(attempts>retries){
            
        }
    }, wait_time);


