function isPalindrome(s) {
    if (s.length <= 1) {
        return true;
    }
    
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    
    return isPalindrome(s.slice(1, -1));
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama!")); // Output: true
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false
