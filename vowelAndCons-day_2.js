
/*First, print each vowel in  on a new line. 
The English vowels are a, e, i, o, and u, 
and each vowel must be printed in the same order as it appeared in.
Second, print each consonant
in  on a new line in the same order as it appeared in */

const vowelAndConsonants = (word) => {

    // Make a vowels array and split given word into array also
    let vowels = ["a", "e", "i", "o", "u"];
    let splitWord = word.split("");

    // Create empty arrays to receive vowels and consonants
    let isVowel = [];
    let isConsonant = [];

    // Loop through word and push letters to their repective arrays
    for (i = 0; i < word.length; i++)
    {
        if (vowels.includes(splitWord[i])){
            isVowel.push(splitWord[i])
        } else {
            isConsonant.push(splitWord[i]);
        }
    }

    // Concatenate both arrays now populated and print
    let concatVowCon = [...isVowel, ...isConsonant];
    for (letter of concatVowCon){
        console.log(letter);
    }
}

vowelAndConsonants("organizational");
