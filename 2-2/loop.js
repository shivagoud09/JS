a=[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];
sum=0;
for(i=0;i<a.length-1;i++){
    for(j=0;j<a.length-1;j++)
    {
        console.log (a[i][j]);
        console.log(a[i][j+1]);
        console.log(a[i+1][j]);
        console.log(a[i+1][j+1]);
        x= a[i][j]+a[i][j+1]+a[i+1][j]+a[i+1][j+1];
        console.log(x);
     if(x>sum){
        sum=x;
     }

    }
console.log(sum);
}