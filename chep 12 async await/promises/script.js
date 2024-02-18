
/  promises for programming in javascript its better in promises 

// promises injs its object and that have succesfully and rejct promises condition and its run eventuallly run that code and resoltuiton for perfticular task by handler


let promises = new Promise(

    (resolve, reject) => {
        console.log("im promises");
        setTimeout(() => {
            resolve("2000");
            console.log(promises);
            reject("some error reject");
        }, 100);
    }
);

console.log(promises);
/// its proiimses hvae prototype and that have promise status and pormise result for the promise prototype fileed so itshave 2 filled


// promisses have 3 status like

// pending
// reject
// fullfiledd




/// callabck in Promises for all funtiction and that use for all api response 

function getApiData(dataid, getnextdata) {
    // setTimeout(() => {
    //     console.log(dataid);

    //     if (getnextdata) {
    //         getnextdata();

    //     }

    // }, 10000);

    return new Promise(

        (resolve, reject) => {
            console.log("new promises api response");
            setTimeout(() => {
                resolve("new api res 5000");
                resolve["success"];

                console.log(promises);
                // reject("some error reject");
            }, 3000);
        }
    )

}

let abc = getApiData("2525");



const getAPiPromises = () => {
    return new Promise(

        (resolve, reject) => {

            setTimeout(() => {
                console.log("result for data for api for get api");

                resolve["success"];
            }, 5000);




        }
    );
}

let promis = getAPiPromises();

/// if promiise result have success and that is resolve message and if promise are rejected then promise rejected itss work on totally for the  promise   for developed

promis.then((res) => {
    console.log("promise full done ", res);

})

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
                console.log("data 1");

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
                console.log("data 1");

                resolve["success"];
            }, 4000);


        }
    );
}

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
    (res) => {

        console.log(res);
        asyncfuntction2().then(

            (res2) => {
                console.log("ressult 2  for data 2  binidng and getting the res0sne data ")
            }
        )


    }
)


