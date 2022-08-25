//Reverse Words

let revWords = (str) => {
    let reversed = "";
    let words = str.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        reversed += words[i] + " ";
    }
    return reversed.trim();
};

//let revWords = (str) => str.split(" ").reverse().join(" ");

console.log(revWords("days. big make things Little"));
