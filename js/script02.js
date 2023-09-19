console.log("C++");
let a = function func1(){
    console.log(111);
}

let b = function (){
    console.log(222);
}

let c = function (x,y){
    console.log(x+y);
}

a()
b()
c(10,20)
//Arrow function
let d = ()=>{console.log(222);}
let e = (x,y)=>{
    console.log(x+y);
}
d()
e(50,50)

let f = ()=>{
    console.log("AAA");
}

let g = (x,y)=>{console.log(x+y);}
let h = ()=>'Hello' //---|
//                       |-----> same
let i =()=> {       //---|
    return 'hello'
}


