console.log("first");
function calllbackFun() {
    console.log("logiing report")
}

console.log("secodn");

setTimeout(calllbackFun(), 3000);

console.log("thirs");
console.log("]four");


/// async protgramming and that callabck funtion for use to awit esettimeout and doestnot effect in other code


/// callback aesa funtion jisme argument k thrygug funiton pass hota he use callback kahter he


function sum(a, b) {
    console.log(a + b);

}

function calculator(a, b, sumcallback) {
    sumcallback(a, b)
}

calculator(5, 2, sum);


// nesting measesns nested menas like ek k andar ek code run thay like 

let num = 18;
if (num > 5) {
    if (num == 4) {

    } else {

    }
} else {

}

// this is way of nestwdd and its nesting 
/// callabck hell issue in progrmmain the nested callback


function getData(dataid, getnextdata) {
    setTimeout(() => {
        console.log(dataid);

        if (getnextdata) {
            getnextdata();

        }

    }, 3000);



}

getData(25, () => {
    console.log('geetiing data 2 ....')
    getData(50, () => {
        console.log('geetiing data 3 ....')
        getData(75, () => {
            console.log('geetiing data 3....')
            getData(100, () => {
                console.log('geetiing data 4 ....')
                getData(120);
            })
        })
    })
});


///  promises for programming in javascript its better in promises 

// promises injs its object and that have succesfully and rejct promises condition and its run eventuallly run that code and resoltuiton for perfticular task by handler


let promises = new Promise(

    (resolve, reject) => {
        console.log("im promises");
        setTimeout(() => {
            resolve("2000");
            console.log(promises);
            reject("some error reject");
        }, 9000);
    }
);

console.log(promises);
/// its proiimses hvae prototype and that have promise status and pormise result for the promise prototype fileed so itshave 2 filled


// promisses have 3 status like

// pending
// reject
// fullfiledd 






function getApiData(dataid, getnextdata) {
    // setTimeout(() => {
    //     console.log(dataid);

    //     if (getnextdata) {
    //         getnextdata();

    //     }

    // }, 10000);

    return new Promise(

        (resolve, reject) => {
            console.log("im promises");
            setTimeout(() => {
                resolve("new api res 5000");
                resolve["success"];

                console.log(promises);
                // reject("some error reject");
            }, 5000);
        }
    )

}

let abc = getApiData("2525");



const getAPiPromises = () => {
    return new Promise(

        (resolve, reject) => {
            console.log("im promises");

            resolve["success"];


        }
    );
}

let promis = getAPiPromises();

/// if promiise result have success and that is resolve message and if promise are rejected then promise rejected itss work on totally for the  promise   for developed 

promis.then((res) => {
    console.log("promise full done ", res);

});
promis.catch((res) => {
    console.log("promise full done ", res);
})



/// promise chaine what is promise chanian i

//  its is one promise reoslve after that new api repsosne will be call so its promise chainening 


function asyncfuntction() {

    console.log("data getting data 1");


    return new Promise(

        (resolve, reject) => {

            setTimeout(() => {
                console.log("some data in promisess");

                resolve["success"];
            }, 2000);


        }
    );
}



function asyncfuntction2() {

    console.log("data getting data 2");


    return new Promise(

        (resolve, reject) => {

            setTimeout(() => {
                console.log("some data in promisse 2  getting");

                resolve["success"];
            }, 4000);


        }
    );
}
console.log("fetching data 2 in promisses for the use")

// p1.then((res) => {

//     console.log(res)
//     let p2 = asyncfuntction2();
//     p2.then(
//         (res) => {

//             console.log(res);
//         }
//     );


// });

asyncfuntction().then(
    (res)=>{
        
        console.log(res) ;
        asyncfuntction2().then(

            (res2)=>{
                console.log("ressult 2  for data 2  binidng and getting the res0sne data ")
            }
        )


    }
)


//// async await for api and that data 




function api(){
    return new Promise(
        (resolve, rejcet) =>{

            setTimeout(() => {

                resolve(200) ;

                

            }, 2000);
        }

        
    ) ;
}

/// declartion and for using a getwaatherdata  for using asynchorous api calling  

async function getWeatherData(){
    await  api() ;

}


/// async await funtion call and use 


function getApiDataWeatherData(databseid){
    return new Promise(
        (resolve, rejcet) =>{
            setTimeout(() => {
                console.log("api data 2" , databseid) ;
                // resolve(200) ;
                resolve("success") ;
            }, 2000);
        }
    ) ;
}


async function getAllData(){
await getApiDataWeatherData(250) ;
await getApiDataWeatherData(350) ;
await getApiDataWeatherData(550) ;
}

/// iife function check mdn refernece to use
