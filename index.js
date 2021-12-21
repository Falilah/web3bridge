"use strict";

let encryptBtn = document.getElementById("encrypt-btn");
let encryptInput = document.getElementById("encryption");
let plainInput = document.getElementById("plainInput");
let inputs = [encryptInput, plainInput];
let dycryptbtn = document.getElementById("dycrypt-btn");

inputs.forEach((input) => {
  input.oninput = () => {
    input.value = input.value.toUpperCase();
  };
});
