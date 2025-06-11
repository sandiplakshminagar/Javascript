//function declaratin

//run(); it can be call upon the function declaration
function run(){
    console.log('runnig');
}
//function call/invoke
run();


//stand () not work this is assignment
//namedfunction assignment
let stand=function walk(){
    console.log('walking')
}
stand();

//anonymous funtion
let stand2=function (){
    console.log('walking')
}
stand2();
 
/*Hoisting*/



///////////////////
function sum(a,b){
    console.log(arguments)
    return a+b;
//console.log (sum(1,2))
//console.log(sum())


}
let ans1=sum(1,2,3,4,5);

///////////dynamically handle the parameter///////////////
function sum1(){
    total=0;
    for(let value of arguments)    //special operator//
        total=total+value;
    return total;
}
let ans=sum1(1,2,3,4);
console.log(ans)


/////rest operator/////// multiple parameter handled by rest operator//
function sum2(...args){
    console.log(args);

}
sum2(1,2,3,4,5,6)

/////defalut pararmeter/
function int(p,r=5,y=10){
    return p*r*y/100;
}
console.log(int(1000,))

//
/*let person={

Fname:'love',
lName:'babbar'
}
function fullname(){
    return`${person.Fname}${person.lName}`;
}
console.log(fullname()); */
//getter -acess properties
// setter-change the properties
 let person={

Fname:'love',
lName:'babbar',

get fullname(){
    return`${person.Fname}${person.lName}`;

},
set fullname(value){
    let parts=value.split(' ');
    this.Fname=parts[0];
    this.lName=parts[1];
}
 };
 try{
    person.fullname='raja';
 }
 catch(e){
    alert('you have sent a wrong number');
 }
 console.log(person.fullname);




 //scope in function Mdn//

 /*function walk(){
    var a=5;
 }
console.log(a);*/

for(var i=0;i<10; i++){

}
console.log(i);






////Reducing an array//
/*let arr=[1,2,3,4,5];
total=0;
for(let value of arr){
    total=total+value;
}
console.log(total)*/
const numbers = [1, 2, 3, 4, 5];

const sum4 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum4); // Output: 15
