// Suggestions for Students to Improve the Code:

// 1. Allow Uppercase Input Without Conversion
// Instead of converting the entire string to lowercase, modify isVowel to check both uppercase and lowercase vowels.
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// 2. Use a Regular Expression Instead of a Loop
// Simplify vowel counting by using match() with a regex.
function checkVowels() {
    let text = document.getElementById("textInput").value;
    let matches = text.match(/[aeiouAEIOU]/g); // Regular expression to find vowels
    let vowelCount = matches ? matches.length : 0; // Count matched vowels or return 0
    document.getElementById('result').textContent = "Total Vowels: " + vowelCount;
}
// Concepts Covered: Regular expressions, match() method.

// 3. Enhance User Experience with Real-Time Counting
// Add an event listener to update the vowel count as the user types.
document.getElementById("textInput").addEventListener("input", checkVowels);
// Concepts Covered: Event listeners, real-time DOM manipulation.

// 4. Improve UI with Better Display Messages
// Show a message if no vowels are found.
let message = vowelCount > 0 ? `Total Vowels: ${vowelCount}` : "No vowels found!";
result.textContent = message;

// 5. Expand Functionality (e.g., Count Each Vowel Separately)
// Track individual vowels and display their frequency.
function checkVowels() {
    let text = document.getElementById("textInput").value.toLowerCase();
    let vowels = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    let totalVowels = 0;

    for (let char of text) {
        if (char in vowels) {
            vowels[char]++;
            totalVowels++;
        }
    }

    document.getElementById('result').textContent = 
        `Total Vowels: ${totalVowels}, A: ${vowels.a}, E: ${vowels.e}, I: ${vowels.i}, O: ${vowels.o}, U: ${vowels.u}`;
}
// Concepts Covered: Objects, looping through strings, dynamic text output.

// 6. Handle Edge Cases
// Trim whitespace to avoid empty input errors.
// Display an error message if input is empty.

// Final Challenge for Students:
// - Modify the program to count consonants as well!
// - Allow users to input text using a speech-to-text API for accessibility.

// These improvements make the code more efficient, interactive, and user-friendly! 🚀
