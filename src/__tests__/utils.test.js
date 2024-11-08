import isPalindrome from "../utils";

describe("isPalindrome", () => {
    it("returns true for a lowercase palindrome", () => {
        expect(isPalindrome("racecar")).toBe(true);
    });

    it("returns true for a mixed-case palindrome", () => {
        expect(isPalindrome("RaceCar")).toBe(true);
    });

    it("returns false for an empty string", () => {
        expect(isPalindrome("")).toBe(false);
    });

    it("throws an error for non-alphabetic characters", () => {
        expect(() => isPalindrome("racecar123")).toThrow("Input must contain only alphabetic characters");
    });

    it("throws an error for non-string input", () => {
        expect(() => isPalindrome(123)).toThrow("Input must be a string");
    });
});
