// loop to code execute again and again 

  // for loop in javascript  

  for(let a  = 0 ; a <=5 ; a++ ){
console.log('dharmesh ahir') ;
  }

  ///  let some example 
  let sum = 0 ; 
  let num = 25 ;
  
  
  for(let a  = 0 ; a <=num ; a++ ){
    sum =  sum + a ;

      }
      console.log(sum)


      /// while loop for use
      let i =0 ;

      while(i<=5){
      console.log(i) ;
      i++

      }

      /// dp while  looop 

      let numer = 20 ;

      do{
console.log("dharmesh") ;
numer ++ ;



      }while(numer ==10 ) ;



  /// for off loop use to 
  /// character for srring nad itereture

  let str = "dharmesh katraiya " ;
  
  let size  = 0 ; 


  for(let val of str){
    console.log(val) ;
    size ++ ;


  }
  console.log(size) ;

  

  /// for in loop use to  arraya and object 
  // ovbject have key will be accesss to use for that 
  // use for key to key pair value to us e

  const studetn = {
    namr  : "raj",
    age : 25 ,
    ispass : true
  }

  for(let key in studetn){
    // console.log(key) ;
    console.log("key * " , key , "valeu = ", studetn[key]) ;


  }


  /// practise question for the task 

  //1  print 1 to 100 number


//   let pVal = 100 ;

//   for(let pnum = 0 ; pnum <= pVal ; pnum++ ){
// ///  for evene number 
//   if(pnum % 2 == 0){
//     console.log("num = ",  pnum) ;

//   }


//   //// for odd dnumber 
//  if(pnum % 2 !== 0){
//     console.log("oddnum = ",  pnum) ;

//   }
//   }


// question 2 

// for  game to guest the game numebr and that number the correct the use incput or not check  

let gameNum  = 25 ;

let userNum  = prompt("guese the game number :") ;

while(gameNum !=  userNum){
    userNum = prompt("you are wrong number , guese again number") ;

}
console.log('congrats you are correct the number') ;

