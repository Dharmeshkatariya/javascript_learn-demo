const url = "https://cat-fact.herokuapp.com/facts";

let btn = document.querySelector("#btn");

console.log("api")
// const getFacts = async () => {

// }




async function getfacts() {
    let response = await fetch(url);
    console.log(response)
    let data = await response.json()

    console.log(data[0]);
    btn.innerText = data[0].text;

}

getfacts()
