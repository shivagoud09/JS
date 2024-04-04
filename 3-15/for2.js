a=[20,30,403];

// a.forEach((e)=> {
//     console.log(e.length);

// });
console.log(a);

myownfunction(a,(e)=>{
    return e+10;
});

function myownfunction(array,callback){
const n= array.length;
for(let i=0;i<n;i++){
    array[i] = callback(array[i]);
}
}

console.log(a);