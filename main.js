// require('dotenv').config()   //for production
// console.log(process.env)

window.onload = function () {
  dadJokes();
};

let allTheFunnies = {};

const options = {
	method: 'GET',
	headers: {
		Accept: "application/json"
	}
};

const dadJokes = () => {
  fetch('https://icanhazdadjoke.com/', options)
  .then(res => {
    if(!res.ok) {
      throw Error(res.statusText)
    } return res.json()
  })
  .then((data) => {
    console.log(data)
    allTheFunnies = data.joke
  })
  .catch((error) => console.log(`Error, ${err}`))
  .then(() => console.log(allTheFunnies))
}

dadJokes();

const theFunny = () => {
	dadJokes()
	document.getElementById('jokeWords').innerText = allTheFunnies.joke;
}