
/*
async function fetchDogecoinPrice() {
    try {
        const response = await fetch(dogecoinPriceApi);
        const data = await response.json();
        const price = data.price; // Replace with the actual property from the API response
        document.getElementById('dogecoin-price').textContent = `$${price}`;
    } catch (error) {
        console.error('Error fetching Dogecoin price:', error);
        document.getElementById('dogecoin-price').textContent = 'Error';
    }
}*/



var fiat_currency = 'usd';
    // Fetch Dogecoin value and convert prices
    $.getJSON("https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=" + fiat_currency, function(data){
        localStorage.setItem('dogecoinValue', data["dogecoin"][fiat_currency]); // we store the value in local storage        
    }).fail(function( data, textStatus, error ) {
        alert("Failed to fetch Dogecoin value: " + textStatus + ", " + error);
    });

    const dogecoinValue = localStorage.getItem('dogecoinValue');
    document.getElementById('dogecoin-price').textContent = dogecoinValue.dogecoin;