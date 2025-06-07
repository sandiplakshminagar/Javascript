//objects
/*const rectangle={
    length:1,
    bredth:2,
   draw(){ //methord for behaviour
    console.log('draw'); 
   }    
}*/

 /*function for object creation-----------------
1-factory function
2-constructor function
*/

/*
function createRectangle(){
    let rectangle={
    length:1,
    bredth:2,
   draw(){ //methord for behaviour
    console.log('draw');
   }
   } ;
   return rectangle;

}
let rectangleobj1=createRectangle;*/

// value with parameter+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function createRectangle(len,bre){
    let rectangle={
    length:len,
    bredth:bre,
   draw(){ //methord for behaviour
    console.log('draw');
   }
   } ;
   return rectangle;

}
let rectangleobj1=createRectangle(5,7);





//----------------++++++++++++++++++++++++++------------------------------------------------------------//
//constructor function----pascal notation  properties or methord ko define
function Rectangle(){
    this.length=1,
    this.breadth=2,
    this.draw=function(){
        console.log('drawing')
    }
}
let rectangleobject=new Rectangle();