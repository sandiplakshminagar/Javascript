//control statenment-------------------
let marks=80
if (marks>=80){
    console.log("grade a")
    
}
else if(marks>=70){
    console.log("garde b")
}
else if(marks>=60){
console.log("grade: c")
}
// switch CASE---------------------------
let num=2;
switch(num){
     case 1: console.log('A')
     break;
      case 2: console.log(' THE NUMBER IS 2:B')
     break;
 case 3: console.log('C')
     break;

}

//--------Loop
for(let i=0; i<=5;i++){
    console.log(i,'babbar')

}
//while-------
let p=10
while(p<=10)
{
    console.log(p)
    p++;
};
// do-while-------
let o=5;
do{
    console.log(o)
o++;
}
while(o<10);


/*for in++++++++++++++++++++++++++++++++++++++++++*/

const person = {
  name: "Soham",
  age: 23,
  city: "Agra"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}
 
   ///////////////////for of loop

const fruits = ["apple", "banana", "mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
