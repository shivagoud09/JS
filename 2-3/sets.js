// let s1= new Set([1,2,3,4,5,6,6,4,4,4])
// console.log(s1);
// set is used to delete duplicate elements.


let letter= new Set(["a","b","c","d","f","g","h"]);
console.log(letter);
let text='';
letter.forEach(
    function(v){
        text+= v
    }
)
console.log(text);
console.log(letter.values());
 
for(let x of letter.values()){
    console.log(x);
}

console.log(letter.size);

