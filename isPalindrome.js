function isPalindrome(x) {
 // Converting the input string to smallcase
    const input = x.toLowerCase();
  
    // Split the string into an array
    const string = input.split("");
  
    // Reversing the array
    const rearray = string.reverse();
  
    // Join the array back to a string
    const reversedString = rearray.join("");
  

    if (input == reversedString) {
        return true
    } else {
        return false
    }
