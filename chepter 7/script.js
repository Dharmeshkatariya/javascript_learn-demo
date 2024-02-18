// lecture 7 for DOM 
// dom manupaltion

// 1 attribute 

// let div = document.querySelector("div");
// let btn = document.querySelector("button");


// console.log(div);

// let btnid = btn.getAttribute("button");

// let id = div.getAttribute("id");
// console.log(id);


// let name = div.getAttribute("name");
// console.log(name);

// // set attribute set the value of the setarbutiebr

// let newDiv = div.setAttribute("div", "cool");
// console.log(newDiv);

// // for use as a newdiv as setatrribute the valley

// ///geet style css in javascr

// let box2 = document.querySelector("div");

// box2.style.backgroundColor = "red"
// box2.style.fontSize = "50px" ;


// let diva = document.querySelector("#div") ;
// diva.style.backgroundColor ="red";


// // dom nsmupation for use to insert elemenr in js 
// // 1 . insert 

// // first step create elemnt and after thet will add for adding 

// ///  for append to last off the end will be insert
// let newbtn = document.createElement("button") ;

// newbtn.innerText = "Log out";
// newbtn.style.backgroundColor ="red";
// newbtn.style.fontSize = "50px" ;
// newbtn.style.color="white";

// let listdiv = document.getElementById("newbtn") ;
// listdiv.append(newbtn) ;

// // for start will be use a prepand 

// let a = listdiv.prepend(newbtn) ;

// /// .. 3 is a before and 
// // 44 is a afetr /


// prepand and after method 

let newheading  = document.createElement("h1") ;
newheading.innerHTML = "This is me";
newheading.style.backgroundColor = "green"
document.querySelector("body").append(newheading);

/// its percfetc work 


let div  =  document.querySelector("div") ;

div.style.backgroundColor = "red";

let btn  =  document.createElement("button") ;
btn.innerHTML ="Its is append the child for thta div"
div.append(btn);
div.before(btn);
div.prepend(btn) ;
div.after(btn) ;

// its all is the btn of and that is use of the 


/// any node for delete that time use for remove properties for that is use

btn.remove();
div.remove() ;

/// homwe work apppend chidl 
// removchild 


// prectise question for use like this 

let createbtn  =  document.createElement("button") ;
createbtn.innerHTML = "Clcick" ;
createbtn.style.backgroundColor = "red" ;
createbtn.style.color = "white" ;
createbtn.style.fontSize = "20px" ;

document.querySelector("body").prepend(createbtn) ;

///  question 2

// let cbtn = 
let para = document.querySelector("p") ;

// ist bed way to reprets the ovwrdide old class so i m use for the classlist for a add a new elemtn for the dataa for the tAG 
// para.setAttribute("class","newClass") ;

para.classList.add("newClass") ;
