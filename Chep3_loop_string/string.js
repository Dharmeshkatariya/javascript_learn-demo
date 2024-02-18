
/// string  
///    strirn are immutable its not chnage in javascriot for all



let str = "dk" ;

console.log(str[5]) ;

// template literals for string 

let specialString = `its new string` ;

console.log(specialString) ;

let obj = {
    name : "ram",
    price : 25 ,

}

var output = `name is ${obj.name} and price ${obj.price}` ;
console.log(output) ;



// escape charcter for use next linr show the output string 

let a ="couple\nTolove" ; // lenght for that srrng only expectd char have one string possition number 
console.log(a.length) ;

// for \ t use a tab space give 



/// javascritp mehtod 
// 1 toUppercase 
// string mehord adn its not change in original string its return only newstirng and not change iriginal stirng bacause string is immutablle 

// slice emthod
// last end index not included in new string 
let newStr  = "1234560";
newStr.slice(2,5) ;


/// conacat method for use 

let srt1 = "dk";
let srt2 = "ahir" ;

let res = srt1.concat(srt2) 
console.log(res) ;

/// srt1+ str 2 ; same thing for concat metho for using


/// replcae method for use 


let x =  "hello";
let newres =x.replace("h","y") ;
console.log(newres) ;
let y = "helolololo"
let newrep = y.replaceAll("lo","d") ;

console.log(newrep) ;

/// for chatAt(index) find index thfrihg index thef fidd

// praactise qustion 
// 1 genaarte prormt and username first add @ and fullnameand lasthave fulllenght 

let userName = prompt("enter your full name") ;
let userLenght =  userName.length ;
let name  = `@${userName}${userLenght}`  ;
console.log(name) ;

