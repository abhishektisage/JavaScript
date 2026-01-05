let url = "https://api.adviceslip.com/advice";

async function getAdvice() {
  try {
    let res1 = await fetch(url, { cache: "no-store" });
    let data1 = await res1.json();
    console.log("Advice 1 =", data1.slip.advice);

    let res2 = await fetch(url, { cache: "no-store" });
    let data2 = await res2.json();
    console.log("Advice 2 =", data2.slip.advice);
  } catch (err) {
    console.log("Error =", err);
  }
}

getAdvice();
