//Reverse String

let revStr = (str) => {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

//let revStr = (str) => str.split("").reverse().join("");

console.log(revStr("Clarusway Rocks!"));
