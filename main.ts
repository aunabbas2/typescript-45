// equality and enquallity test1

console.log("equality test with strings:","apple"=== "apple");

// equality and enquallity test2

console.log("eneqality test with strings:",("apple" as string)!= "orange");  //string is lia lgaya kui k two alag hai apple alag orange alag same nhi hai//

//test using lower case function//
console.log("lower case test function:","HELLO".toLowerCase()==="hello");//lower case funcyion se hello small hogya/

//numerical test involving euility and enequlity//

console.log("equality test with numbers",23 === 23);

//greater then/
console.log("greater than test:",10>5);

// less then//
console.log("less than test:",5<10);



//greater than or equal to//
console.log("greater than and equal to test:",10>=10);
//less than equal to//
console.log("less than equal to test:",5<=10);

//test using "and" n  "or" opreator
console.log("AND opreator test:",5===5 && 10>5);

//tetsing using or opretor//
console.log("AND opreator test:",5===5 || 10>5);

//test wheather item is arry or not//
const fruits:string[]=["apple","bannana"];
console.log('test "bannana"in the array:',fruits.includes('bannana'))    ;      //include string ka function hai//