let number=8;
let count=0;
for(let i=0;i<10;i++){
if(number%i==0){
count++;
}
}
if(count==2)
console.log(number,"is prime")
else
console.log(number,"is not prime")
