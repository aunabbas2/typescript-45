"use strict";
let list = ['imran khan', 'nawaz sharif', 'zardari'];
//for(let i=0; i<list.length;i++){//
// console.log('dear Mr'+list[i] + ',\n\nit is our pleasure to invite you in party.\n\nTHANKYOU!\n\n')
//}
let absent_guest = 'imran khan';
let new_guest = 'SIR KAMRAN KHAN TESSORI';
list[0] = new_guest;
for (let i = 0; i < list.length; i++) { //again loop//
    console.log('dear Mr' + list[i] + ',\n\nit is our pleasure to invite you in party.\n\nTHANKYOU!\n\n');
}
console.log(`MR ${absent_guest} is not coming `);
console.log('good news! we find big table so we are invited more 3 guest');
list.unshift('sir zia khan');
list.splice(2, 0, 'MARIAM NAWAZ');
list.push('bilawal bubloo');
for (let i = 0; i < list.length; i++) { //again loop//
    console.log('dear Mr' + list[i] + ',\n\nit is our pleasure to invite you in party.\n\nTHANKYOU!\n\n');
}
