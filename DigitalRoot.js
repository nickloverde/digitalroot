// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Whiteboard:

// I'm taking in a number and I need to return a single digit integer of the addition of the number
// I'm going to start by making the number a string and then splitting it in an array
// Then, I will use the method reduce to act as an accumulator and add up the numbers (I will need to convert them back to numbers with parseInt)
// Use an if statement to check if the sum of the numbers is a single digit. If it's not (sum > 9) then I need to rerun the function digital root with the sum as the parameter or else return the sum

function digital_root(number) {
    let arr = number.toString().split("");
    let sum = arr.reduce((a,b) => +(a) + +(b))
 
    if (sum > 9) {
        return digital_root(sum);
    } else {
        return sum;
    }
 }

//  Additional solution

function digital_root(n) {
  return (n % 9) || 9;
}