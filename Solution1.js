function Nth_of_AP(a, d, N)
    { 
        return (a + (N - 1) * d);
    }
    let a = prompt("Enter A"); 
    let d = prompt("Enter D"); 
    let N = prompt("Enter N"); 
       
    // Display the output
    console.log("The "+ N + "th term of the series is : "
    + Nth_of_AP(a,d,N));
