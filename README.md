# js_recap_1

let
const
var

primitívek
string
number
boolean
undefined
null
tömb is objektum
methods

hotSexyFunction;
hotSexyFunction();

Hoisting

let anything = 7;
let x = anything;
anything = 8;
x === 8

let anything = [1,2,3];
let x = anything;
anything[3] = 8;
x[3] === 8;
... (spread opreator (shallow copy))

//Deep copy
JSON.parse(JSON.stringify(e))

let anything = {
"key": [1,2,3]
}
let x = {...anything};

anything.key[3] = 8;

console.log(x);
---------------------------------------------------------------------------
let anything = {
"key": [1,2,3]
}
let x = JSON.parse(JSON.stringify(anything));

anything.key[3] = 8;

console.log(x);
-----------------------------------------------------------------------------
let anything = {
"key": docment.getElementByid("root")
}
let x = JSON.parse(JSON.stringify(anything));

console.log(x);
console.log(anything);
--------------------------------------------------------------------------
if else
switch
&& 

||
=
------------------------------------------------------------------------------
if(document,getElementById("root")){

}else{
 consloe.log("nincs ilyen elem");
}
if(!document,getElementById("root")){
  consloe.log("nincs ilyen elem");
}
-----------------------------------------------------------------------------------