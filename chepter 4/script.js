let marks  = [
    50 ,60,40,12,58,65,22,12

]

console.log(marks);
console.log(marks.length);


/// loopin in array

for(let i = 0 ; i<marks.length ; i++){

    console.log(i) ;

}

/// for of loopp using to araaay
let heroes  = ["shaktiman","batman","balverr"] ;
for(let her of heroes){
    console.log(her) ;
}


// use to practise questoion

let studentavg = [ 75,62,99,82,41,65,80,90,75] ;
let sum  = 0 ;


for(var a of studentavg){
sum = a+sum;

}
console.log("sum",sum) ;
let avg = sum / studentavg.length ;
console.log("avg",avg) ;


// q2 prqacstise liek ain price array have 10% offf and get final price array

let price  = [ 200,100,600,900,40,200];

for(let i =0;i<price.length ; i++){

    let offer  =  price[i]/10 ;
    price[i] = price[i] - offer ;
    

}

console.log(price) ;



/// araay method like

// 1 push enter the last and chnage the oringinal araay 

///2  pop deelte the last and retutrn delete iteme


///3  to string array convert the tostrooong 

// "20,52,52" ;/


// 4  concat the join multiple array and return result no change original araraay 

let marvel = ["spider","ironmen"] ;
let an= ["balveer"] ;

let h = marvel.concat(an) ;
console.log(h) ;

// unshift its work push like but addd to start element chnage the original array 

/// shift work ppop like this but delete start and return 


/// slice method like poiss nikalana  like orignla arraay no chnage is 
/// end index will not include ok that return value 
let big  = [ 2,2,2,2 ,2,2]
 ;

 let result  = big.slice(2);

 console.log(result) ;

 ///  splice method work like this ,, addd remve and replaace and change the original array 
 /// splice(start index , no of deleet item ,  new element )
 /// new eleemnt add for start index 

let numberss= [ 25,25,2,2,2,52,52,52,5,62,6,5] ;

let dc = numberss.splice(2,3) ;
console.log(dc) ;

/// practise question  , 
/// cretae arraay for comapye reove first elemnt ,remvoe ola and ubser and add amzaon laend

let company =["google","uber","ola","netflix"];

company.shift(0) ;

console.log(company);

company.splice(0,2);



console.log(company);

company.push("amazon" );
console.log(company) ;
