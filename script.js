const btn = document.getElementById("convert-button")
const currencyselect = document.querySelector(".dolaramericano")
function covertvaluos() {

    const currencyvaluos = document.querySelector(".input-currency").value
    const convert = document.querySelector(".value1")
    const coverto = document.querySelector(".value2")
    const dolartoday = 5.2
    const eurotoday = 6.2

    if (currencyselect.value == "dolar") {
        coverto.innerHTML = new Intl.NumberFormat("en-US", {
            styles: "currency",
            currency: "USD"
        }).format(currencyvaluos / dolartoday);

    }

    if (currencyselect.value == "euro") {
        coverto.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"

        }).format(currencyvaluos / eurotoday)

        
        console.log(currencyselect.value)

        convert.innerHTML = new Intl.NumberFormat("en-BR", {
            styles: "currency",
            currency: "BRL"
        }).format(currencyvaluos);


    }

}


btn.addEventListener("click", covertvaluos)