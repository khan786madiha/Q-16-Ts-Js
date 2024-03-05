"use strict";
// 16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests  to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list
let guestsArr = ["Tehreem", "Merum", "Konain", "Habiba", "Uswa"];
let canNotAttend = "Konain";
console.log(canNotAttend + ' ' + "can not make it, for Dinner");
let newGuest = "Zoya";
guestsArr[guestsArr.indexOf(canNotAttend)] = newGuest;
console.log(guestsArr);
guestsArr.map((item) => (console.log(`Dear ${item}, I found a bigger Dinner Tabble`)));
let guestBegin = "Ayesha";
guestsArr.unshift(guestBegin);
console.log(guestsArr);
let middleGuest = "Hibban";
let middleIndex = guestsArr.length / 2;
guestsArr.splice(middleIndex, 0, middleGuest);
console.log(guestsArr);
guestsArr.push("Ambreen");
console.log(guestsArr);
guestsArr.map((item) => (console.log(`Dear ${item}, You Are cordinally invited to a Dinner`)));
