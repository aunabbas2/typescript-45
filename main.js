"use strict";
let list = ['imran khan', 'nawaz sharif', 'zardari'];
//for(let i=0; i<list.length;i++){//
// console.log('dear Mr'+list[i] + ',\n\nit is our pleasure to invite you in party.\n\nTHANKYOU!\n\n')
//}
let absent_guest = 'imran khan';
let new_guest = 'SIR KAMRAN KHAN TESSORI';
list[0] = new_guest;
//for(let i=0; i<list.length;i++){                     //again loop//
//  console.log('dear Mr'+list[i] + ',\n\nit is our pleasure to invite you in party.\n\nTHANKYOU!\n\n')
//}
console.log(`MR ${absent_guest} is not coming `);
console.log('good news! we find big table so we are invited more 3 guest');
list.unshift('sir zia khan');
list.splice(2, 0, 'MARIAM NAWAZ');
list.push('bilawal bubloo');
for (let i = 0; i < list.length; i++) { //again loop//
    console.log('dear Mr' + list[i] + ',\n\nit is our pleasure to invite you in party.\n\nTHANKYOU!\n\n');
}
console.log('\nsorry we cant arrange big table,only two pwople will be invited');
while (list.length > 2) {
    let remove_guest = list.pop();
    console.log(`sorry mr. ${remove_guest}, you r notinvited for dinner`);
}
for (let i = 0; i < list.length; i++) { //again loop//
    console.log('dear Mr' + list[i] + ',\n\nyou are still invited .\n\nTHANKYOU!\n\n');
}
list.splice(0, 2);
console.log(list);
