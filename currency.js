async function getCurrencyData() {
    var currencyAPIUrl = "https://open.er-api.com/v6/latest/USD"
    var  response =await fetch(currencyAPIUrl)
    var data=await response.json()
 var rates = 
        [
        { code: 'USD', price: data.rates.EGP },
        { code: 'SAR', price: data.rates.EGP / data.rates.SAR },
        { code: 'EUR', price: data.rates.EGP / data.rates.EUR }
    ]
    for (var i = 0; i < rates.length; i++) {
        var currencySection = document.createElement('section')
        currencySection.classList.add('row')

        currencySection.innerHTML = `<h4 class="col-6 fs-5">${rates[i].code}</h4><h4 class="col-6 fs-5">${rates[i].price.toFixed(2)} EGP</h4>`

        document.getElementById('currency').appendChild(currencySection)


    }

}
