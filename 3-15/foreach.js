a=["sai","shiva","goud"];

// a.forEach((e)=> {
//     console.log(e.length);
    
// });
myownfunction(a,(e)=>{
    console.log(e.length);
});

function myownfunction(array,callback){
const n= array.length;
for(let i=0;i<n;i++){
    callback(array[i]);
}
}


