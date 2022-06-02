const adviceNumber = document.getElementById("advice-number")
const adviceText = document.getElementById("advice-text")
const button = document.getElementById("button")

button.addEventListener("click", function() {

    const random = Math.floor(Math.random() * 225)

    const APIaddress = "https://api.adviceslip.com/advice/";

    async function getapi(url) {
        const response = await fetch(url);
        var data = await response.json();

        adviceNumber.innerText = `ADVICE #${random}`
        adviceText.innerText = `"${data.slip.advice}"`
    }

    getapi(`${APIaddress}${random}`)
})





