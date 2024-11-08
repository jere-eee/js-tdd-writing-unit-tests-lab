function isPalindrome(word) {
    if (typeof word !== "string") throw new Error("Input must be a string");
    if (!/^[A-Za-z]+$/.test(word)) throw new Error("Input must contain only alphabetic characters");
    if (word === "") return false;

    let reversed = word.toLowerCase().split("").reverse().join("");
    return reversed === word.toLowerCase();
}

export default isPalindrome;
