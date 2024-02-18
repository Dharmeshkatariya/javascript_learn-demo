// let dom is document obejct model and that will be use 

// window ois lgobal documen t modle
// below all is a  dom manupalation for use 



let idname =  document.getElementById("idname") ;
let classname  = document.getElementsByClassName("classname") ;

let tagname   = document.getElementsByTagName("p") ;

/// for pritnt object that can be uused for console.dir
console.dir(document.body);


/// its will be htmlstrcuutre retunr
console.log(document.body) ; 


/// for qeuryselector use all get elemen tnamne fro same anem id cllass nam etagname thfouth use query 

/// query selector use as class name ,itrs return athe nodelist for all firts eleemnt return
let firstelement  = document.querySelector("p") ;


/// its retunr nodelists for all selector

let alllelement =  document.querySelectorAll("p") ;


/// for by class name 

let queryclass = document.querySelector(".classname") ;
let querybyElementid  = document.querySelector("#idname") ;


let buutonid  =  document.querySelector("#button");
console.dir(buutonid) ;

let classnsme  = document.querySelectorAll(".myclass") ;
console.dir(classname) ;



/// dom properties used
//   1 by tagname
// 2 inner html 
// 33 inne text 
// 4 textcontent


// text conent exmaple 

/// practise quetsionn 1 

/// cerate hello javascript and apppend the dharmesh kataraiay using jaavscrutpt

let h2 = document.querySelector("h2") ;

console.log(h2) ;

h2.innerText = h2.innerText + "dharmesh kataraiay" ;


/// cretae 3 div same classs name box and all div chnage the text 
let textclass  = document.querySelectorAll(".textclass") ;
let index = 1 ; 

textclass[0].innerText = "ddhddj" ;
// for(let div in textclass){
//     div.innerText = `uniq div ${index}` ;
//     index++;
//     console.log(div);

// }

for(let i= 0 ; i<3 ; i++){
  textclass[i].innerText = "new divuniques " + i ;
  
}