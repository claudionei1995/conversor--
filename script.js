const btn = document.getElementById("convert-button")

function covertvaluos() {

    const currencyvaluos = document.querySelector(".input-currency").value
    const convert = document.querySelector(".value1")
    const coverto = document.querySelector(".value2")
    const dolartoday = 5.2
    const conversoes = currencyvaluos / dolartoday

    convert.innerHTML = new Intl.NumberFormat("en-BR", {
        styles: "currency",
        currency: "BRL"
    }).format(currencyvaluos);

    

    coverto.innerHTML = new Intl.NumberFormat("en-US", {
        styles: "currency",
        currency: "USD"
    }).format(conversoes);



}

btn.addEventListener("click", covertvaluos) 