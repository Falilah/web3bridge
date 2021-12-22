"use strict";

let encryptBtn = document.getElementById("encrypt-btn");
let encryptInput = document.getElementById("encryption").value;
let decryptInput = document.getElementById("decryption").value;
let plainInput = document.getElementById("plainInput").value;
// let inputs = [encryptInput, plainInput];
let dycryptbtn = document.getElementById("dycrypt-btn");

const encrypt = function (message) {
  encryptInput;
  plainInput = message.split("");
  console.log("plainInput:", plainInput);

  let inputs = [];
  console.log(inputs);
  for (let i = 0; i < plainInput.length; i++) {
    let letter;
    switch (plainInput[i]) {
      case "a":
        letter = "~";
        break;
      case "b":
        letter = "@";
        break;
      case "c":
        letter = "%";
        break;
      case "d":
        letter = "^";
        break;
      case "e":
        letter = "*";
        break;
      case "f":
        letter = "#";
        break;
      case "g":
        letter = "(";
        break;
      case "h":
        letter = ")";
        break;
      case "i":
        letter = "+";
        break;
      case "j":
        letter = "|";
        break;
      case "k":
        letter = "?";
        break;
      case "l":
        letter = ",";
        break;
      case "m":
        letter = ".";
        break;
      case "n":
        letter = "{";
        break;
      case "o":
        letter = "]";
        break;
      case "p":
        letter = "*";
        break;
      case "q":
        letter = "[";
        break;
      case "r":
        letter = ">";
        break;
      case "s":
        letter = ":";
        break;
      case "t":
        letter = ";";
        break;
      case "u":
        letter = "}";
        break;
      case "v":
        letter = "/";
        break;
      case "w":
        letter = "]";
        break;
      case "x":
        letter = "$";
        break;
      case "y":
        letter = "!";
        break;
      case "z":
        letter = "`";
        break;
      default:
        letter = "*";
        break;
    }
    inputs.push(letter);
    console.log(inputs);
  }
  encryptInput.textContent = inputs.join("");

  return encryptInput;
};
encrypt("This is a good man");

encryptBtn.addEventListener("click", encrypt);

const decrypt = function (message) {
  plainInput = message.split("");

  decryptInput = [];

  for (i = 0; i < plainInput.length; i++) {
    let letter;
    switch (plainInput[i]) {
      case "~":
        letter = "a";
        break;
      case "@":
        letter = "b";
        break;
      case "%":
        letter = "c";
        break;
      case "^":
        letter = "d";
        break;
      case "*":
        letter = "e";
        break;
      case "#":
        letter = "f";
        break;
      case "(":
        letter = "g";
        break;
      case ")":
        letter = "h";
        break;
      case "+":
        letter = "i";
        break;
      case "|":
        letter = "j";
        break;
      case "?":
        letter = "k";
        break;
      case ",":
        letter = "l";
        break;
      case ".":
        letter = "m";
        break;
      case "{":
        letter = "n";
        break;
      case "]":
        letter = "o";
        break;
      case "*":
        letter = "p";
        break;
      case "[":
        letter = "q";
        break;
      case ">":
        letter = "r";
        break;
      case ":":
        letter = "s";
        break;
      case ";":
        letter = "t";
        break;
      case "}":
        letter = "u";
        break;
      case "/":
        letter = "v";
        break;
      case "]":
        letter = "w";
        break;
      case "$":
        letter = "x";
        break;
      case "!":
        letter = "y";
        break;
      case "`":
        letter = "z";
        break;
      default:
        letter = message[i];
        break;
    }
    encryptInput.push(letter).join("");
  }
};

encryptBtn.addEventListener("click", function () {});
