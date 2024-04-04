// str="shashi is lamda  lamda lamda LAMDA";

// p1=/lamda/g; //global match and is sensitive

// r1=str.match(p1);

// console.log(r1);

//------------------------
//  let str1="shashi is lamda  lamda lamda LAMDA";
//  let p2=/lamda/gi; //global match with insensitive
//  let r2=str1.match(p2);
// console.log(r2);

//---------------
let str2="shashi is lamda  lamda lamda LAMDA";
 let p3=/[a-c]/gi; //global match checks for a-t
 let r3=str2.match(p3);
console.log(r3);
//--------------

// let str3="12345678912";
//  let p4=/[1-4]/g; //global match
//  let r4=str3.match(p4);
// console.log(r4);
//-----------
let str4="12345678912";
 let p5=/[^1-4]/g; //global match
 let r5=str4.match(p5);
console.log(r5);

//---------
// let str5="red green blue black";
//  let p6=/red|pink/g; //global match
//  let r6=str5.match(p6);
// console.log(r6);
//--------
// let str6="shashi is the boy";
//  let p7=/girl/g; //global match
//  let r7=str6.search(p7);
// console.log(r7);


