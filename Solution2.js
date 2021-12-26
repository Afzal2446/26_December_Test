function printGP(a, r, n)
{
    let curr_term;
    for (let i = 0; i < n; i++) {
        curr_term = a * Math.pow(r, i);
        console.write(curr_term + " ");
    }
}
    let a = 2; // starting number
    let r = 3; // Common ratio
    let n = 5; // N th term to be find
    printGP(a, r, n);
  
