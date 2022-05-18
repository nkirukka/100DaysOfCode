/* Print integers 1 to N, 
but print “Fizz” if an integer is divisible by 3, 
“Buzz” if an integer is divisible by 5, 
and “FizzBuzz” if an integer is divisible by both 3 and 5. */

const fizzBuzz = (n) => {
    i = 1;
    while (i <= n)
    {
        // Check for multiples of both 3 and 5
        if (i % 15 === 0)
        {
            console.log("FizzBuzz")
        }
        // Check for multiples of 3
        else if (i % 3 === 0) 
        {
            console.log("Fizz")
        }
        // Check for multiples of 5
        else if (i % 5 === 0) 
        {
            console.log("Buzz")
        }
        else
        {
            console.log(i);
        }
        i++;
    }
};

fizzBuzz(100)


