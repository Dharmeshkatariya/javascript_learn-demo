// using js to event handleing 
// inline event handline and jaavscript handling 
// priority javascript handlint 


// let btn1 =  document.querySelector("#btn1");

// btn1.onclciked method to use onclcikced event for use 

// let btn1 = document.getElementById("btn1");
// btn1.onclick = (e) => {
//     console.log(e) ;
//     console.log(typeof e ) ;
//     console.log(e.type) ;
//     console.log(e.target);
//     console.log

//     console.log("helleo btn clciked to use js") 
// }

///  event listeer for beettr  approch to hanlde the event and some more attrctive approach to hanlde the evnet and lister 

// btn1.addEventListener('click', () => {
//     console.log("itds is event lister btn")
// });

// both funtion add and remove are same like ythis 
// btn1.removeEventListener();

var hanlder = () => {
    console.log("its is handler event lister")
};

//if saame handler pass so its not print out bacuse that is reomve 

btn1.addEventListener("click", hanlder);
btn1.removeEventListener("click", hanlder);


/// preactusie q1
// cretae toogle dark light buttotn
let currentmode = "light";

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark";
        // body.style.backgroundColor = "black";

        body.classList.add("dark");
        body.classList.remove("light");

    } else {
        currentmode = "light";
        // body.style.backgroundColor ="white";
        body.classList.add("light");
        body.classList.remove("dark");
    }
});