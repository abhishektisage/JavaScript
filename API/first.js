let url = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log("Fact 1 =", data.text);
    return fetch(url);
  })
  .then(res => res.json())
  .then(data => {
    console.log("Fact 2 =", data.text);
  })
  .catch(err => console.log("error =", err));
