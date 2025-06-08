//math

console.log(Math.round(1.8))

//string--many methord
let lastname= 'sandip'; //primitive
let firstname=new String('nagar')
console.log(typeof(firstname));
console.log(lastname.length);
console.log(lastname.endsWith('p'))
console.log(lastname.startsWith('k'));
let str = "JavaScript";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("Script"));
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.slice(0, 4));
console.log(str.substring(4, 10));
console.log(str.replace("Java", "Type"));
console.log("   Hello World   ".trim());
console.log("red,green,blue".split(","));
console.log(str.charAt(0));
console.log("Hello".concat(" ", "World"));
//template litral\escape sequence
let messege=
` this 
is my 
first messege`;
console.log(messege)
//date object
let date = new Date();

let date2 = new Date('June 20 1998 07:15');

let date3 = new Date(1998, 11, 20, 7);  // December (month 11 = December)

date3.setFullYear(1947);

console.log("Year of date3:", date3.getFullYear());
console.log("Full date3 object:", date3);


///ARRAY.......primitive
let number=[1,2,3,4,5,6,7,8];
number.push(11111);

number.unshift(11);
number.splice(2,0,'a','b')
console.log(number)
console.log(number.indexOf(8));
console.log(number.includes(4));
// use these method for references---------
let courses=[
    {no:1,name:'sandip'},
       {no:2,name:'rahul'}    
]
console.log(courses)
let a=courses.find(function(course){
    return course.name=='sandip';
    /*arrow function let a=courses.findcourse=>{
    return course.name=='sandip';*/
})
console.log(a)
//remve an element
let number1=[1,2,3,4,5,6];
number1.pop(4);
number1.shift();
number1.splice(1,3);
//empty an array
number=[];
number.length=0; 
number.splice(0,number.length)
////////combining and slicing array------
let num1=[1,2,3,4,5]
let num2=[2,4,6,7,9]
let combine=num1.concat(num2)
console.log(combine)
///////splice
 let marks=[10,20,30,40,50,60,70];
  let spliced=marks.slice(2,);
 //let spliced=marks.slice(2,6);
 console.log(spliced)

 //home work combine and slicing of objects

 //spread operator 
 let first=[1,2,3,4];
 let second=[2,4,5,6,7];
 let combined=[...first,...second ]
 console.log(combined)
 //copy
 let another=[...combined]
 //iterating array-for-of/----
 let arr=[1,2,3,4,55,6,78];
 for(let value of arr ){
    console.log(value);
 }

 //for each
 arr.forEach(function(number){
    console.log(number);
    /*arr.Foreach(number=>console.log(number))*/
    
 });

let number3=[20,30,40,50,60];
const joined=number3.join(',');
let mess1='this is my messege';
let parts=mess1.split(',');
console.log(parts)
//sorting array
let number10=[1,2,34,6,8,0,7,]
let k=number10.sort();
number10.reverse();
console.log(k)

//filtering
let nume=[1,2,3,4,5,-2,-5]
let filterded=nume.filter(function(value){
    return value>=0;

    /*arrow function  let filterded=nume.filter( value=> return value>=0;*/
});
console.log(filterded); 

//mapping array 
let nus=[1,2,3,4,5];
let items=nus.map(function(value){
    return 'student-no'+value;
})
console.log(items)
//maping with objects
let nus2=[1,2,3,4,5,6,-2,-3,-4];
/*let filterded1=nus2.filter(value=> value>=0);
let items1=filterded1.map(function(num){
    let obj={value:num};
    return obj;
})
console.log(items1)*/
//chaining
  let chain=nus2.filter(value=>value>=0).map(num=>({value:num}));
console.log(chain);