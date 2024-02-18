//function 
// lbock og code that perfom the specific task 

function   sumofnumers(x,y){
sum = x+y ;
return sum  ;

}

let a =  sumofnumers(25,50) ;

console.log(a) ;
 

/// arreow function

const aerrowmul = (x,y) =>{

    return x+ y ;
};


/// for each loop  funticon and method its allback funtion 
/// higher odrer funtion 
/// bija funtion aej perameter ley ka return koi funtion kare 

/// means  
let arr = [ 25,25,25,2,525] ;

arr.forEach(function printval(val,index,arr){
    console.log(val,index,arr);
});


/// arraat preactise squere any numer

let numbers = [1,2,3,4,5,6,7];


numbers.forEach(function myfun(val){
    console.log(val*val) ;
});


/// map srr,msp//ites retunr newa rraya and callback the futnion and return hte new arrat 

let newarry = numbers.map(
    function myfun(val){
        return val ;
    }
) ;
console.log(newarry) ;


//// alll eveen vlaue filter on the the neuemrb no orignal array change 
/// filter method for each elemnt to filter out

   let c  = numbers.filter(function myfilter(val){
    return val % 2 == 0 ;
    
});

console.log(c) ;


/// reduce method  'its reutnr the singe.l vlaue of that araya 
/// reduce the single arraay value its retunr the single vlaue of thhat arraat metgid n for 
/// reduce(proivious val , current value)


let finalres  = numbers.reduce(function newVal(cur,val){
return cur + val ;
});

console.log(finalres) ;


let marks  = [70,59,60,80,90,99,95] ;

let finalresult  = marks.filter(function myFun(val){
    return val > 80 ;
});

console.log(finalresult) ;