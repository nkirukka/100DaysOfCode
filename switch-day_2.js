
/* Complete the getLetter(s) function in the editor.
It has one parameter: a string, s,
consisting of lowercase English alphabetic letters
(i.e., a through z). 
It must return A, B, C, or D depending on the following 
criteria:*/

function getLetter(s) {
    let letter;
    // Write your code here
    switch (true) {
        case "aeiou".includes(s[0]):
            letter = "A";
            break;
        case "bdcfg".includes(s[0]):
            letter = "B";
            break;
        case "hjklm".includes(s[0]):
            letter = "C";
            break;
        case "npqrstuvwxyz".includes(s[0]):
            letter = "D";
            break;
    }
    return letter;
}

console.log(getLetter("qdfgt"))

