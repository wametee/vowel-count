/**
 * This function retrieves the text input from the HTML element with the ID 'textInput',
 * converts it to lowercase, and counts the number of vowels in the text.
 * The result is then displayed in the HTML element with the ID 'result'.
 */
function checkVowels() {
    // Retrieve the value of the text input field with ID 'textInput'.
    let text = document.getElementById("textInput").value;
    // Initialize the vowel count to zero.
    let vowelCount = 0;

    // Convert the input text to lowercase to ensure the vowel check is case-insensitive.
    text = text.toLowerCase();

    // Iterate through each character in the input text.
    for (let char of text) {
        // Check if the current character is a vowel using the isVowel function.
        if (isVowel(char)) {
            // Increment the vowel count if the current character is a vowel.
            vowelCount++;
        }
    }

    // Retrieve the HTML element with ID 'result' to display the vowel count.
    const result = document.getElementById('result');
    // Set the text content of the result element to display the total number of vowels found.
    result.textContent = "Total Vowels: " + vowelCount;

    // Announce the vowel count if not muted.
    if (!isMuted) {
        speakVowelCount(vowelCount);
    }
}

/**
 * This function checks if a given character is a vowel.
 * @param {string} char - The character to check.
 * @returns {boolean} - Returns true if the character is a vowel, false otherwise.
 */
function isVowel(char){
    const vowels = ["a", "e", "i", "o", "u"]; // Array of vowel letters
    return vowels.includes(char); // Check if the character is in the vowels array
}

/**
 * This function announces the vowel count result via audio.
 * @param {number} count - The number of vowels counted.
 */
function speakVowelCount(count) {
    const utterance = new SpeechSynthesisUtterance("Total vowels: " + count);
    speechSynthesis.speak(utterance);
}

let isMuted = false; // Initialize mute state

/**
 * This function toggles the mute state.
 */
function toggleMute() {
    isMuted = !isMuted; // Toggle mute state

    let button = document.getElementById("muteButton");

    if (isMuted) {
        button.classList.add("muted");  // Apply red color
        button.textContent = "Unmute";  // Change button text
    } else {
        button.classList.remove("muted");  // Remove red color
        button.textContent = "Mute";  // Change button text back
    }
}


/* Functions in JavaScript – The code defines two functions: checkVowels (main logic) and isVowel (helper function).
DOM Manipulation – Uses document.getElementById to access input fields and display results.
String Manipulation – Converts text to lowercase (toLowerCase), iterates over the string, and retrieves characters with charAt().
Loops (for loop) – Iterates through each character of the string to check for vowels.
Arrays and includes() Method – Uses an array to store vowels and checks if a character is a vowel using includes().
Event Handling (If used with an event listener in HTML) – This function can be triggered by a button click.

*/

/* 

Suggestions for Students to Improve the Code:
Allow Uppercase Input Without Conversion

Instead of converting the entire string to lowercase, modify isVowel to check both uppercase and lowercase vowels.
Improvement:
javascript
Copy
Edit
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
Use a Regular Expression Instead of a Loop

Simplify vowel counting by using match() with a regex.
Improvement:
javascript
Copy
Edit
function checkVowels(){
    let text = document.getElementById("textInput").value;
    let matches = text.match(/[aeiouAEIOU]/g); // Regular expression to find vowels
    let vowelCount = matches ? matches.length : 0; // Count matched vowels or return 0
    document.getElementById('result').textContent = "Total Vowels: " + vowelCount;
}
Concepts Covered: Regular expressions, match() method.
Enhance User Experience with Real-Time Counting

Add an event listener to update the vowel count as the user types.
Improvement:
javascript
Copy
Edit
document.getElementById("textInput").addEventListener("input", checkVowels);
Concepts Covered: Event listeners, real-time DOM manipulation.
Improve UI with Better Display Messages

Show a message if no vowels are found.
Improvement:
javascript
Copy
Edit
let message = vowelCount > 0 ? `Total Vowels: ${vowelCount}` : "No vowels found!";
result.textContent = message;
Expand Functionality (e.g., Count Each Vowel Separately)

Track individual vowels and display their frequency.
Improvement:
javascript
Copy
Edit
function checkVowels(){
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
Concepts Covered: Objects, looping through strings, dynamic text output.
Handle Edge Cases

Trim whitespace to avoid empty input errors.
Display an error message if input is empty.
Final Challenge for Students
Modify the program to count consonants as well!
Allow users to input text using a speech-to-text API for accessibility.
These improvements make the code more efficient, interactive, and user-friendly! 🚀

*/