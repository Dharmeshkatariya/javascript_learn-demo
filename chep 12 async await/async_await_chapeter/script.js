
//// async await for api and that data 




function api() {
    console.log("get api call")
    return new Promise(
        (resolve, rejcet) => {

            setTimeout(() => {
                console.log("data 1")


                resolve("success");



            }, 2000);
        }


    );
}

/// declartion and for using a getwaatherdata  for using asynchorous api calling  

async function getWeatherData() {
    await api()

}


/// async await funtion call and use 


function getApiDataWeatherData(databseid) {
    return new Promise(
        (resolve, rejcet) => {
            setTimeout(() => {
                console.log("api data 2", databseid);
                // resolve(200) ;
                resolve("success");
            }, 5000);
        }
    );
}


async function getAllData() {
    await getApiDataWeatherData(250);
    await getApiDataWeatherData(350);
    await getApiDataWeatherData(550);
}

/// iife function check mdn refernece to use
